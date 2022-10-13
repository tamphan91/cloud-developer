import express from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles } from "./util/util";

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  //! END @TODO1
  app.get("/filteredimage", async (req, res) => {
    const image_url = req.query.image_url;
    if (!image_url) {
      return res.status(400).send("image_url is required");
    }

    try {
      const filteredpath = await filterImageFromURL(image_url);
      res.sendFile(filteredpath);
      res.on("finish", function () {
        try {
          deleteLocalFiles([filteredpath]);
        } catch (e) {
          console.log("error removing ", filteredpath);
        }
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).send(error);
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
