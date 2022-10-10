require("dotenv").config();
export const config = {
  "dev": {
    "username": process.env.PROGRESS_USERNAME,
    "password": process.env.PROGRESS_PASSWORD,
    "database": process.env.PROGRESS_DATABASE,
    "host": process.env.PROGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
