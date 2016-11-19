"use strict";
module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    trustProxy: process.env.TRUST_PROXY,
    bugsnagKey: process.env.BUGSNAG_KEY,
    secureMode: process.env.SECURE_MODE,
    db_uri: process.env.DB_URI,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    baseUri: process.env.BASE_URI,
    mandrill_key: process.env.MANDRILL_KEY,
    jwt_secret: process.env.JWT_SECRET,
    s3Bucket: process.env.S3_BUCKET,
    aws_id: process.env.AWS_ACCESS_KEY_ID,
    aws_key: process.env.AWS_SECRET_ACCESS_KEY

};
