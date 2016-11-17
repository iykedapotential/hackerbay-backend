"use strict";
module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    trustProxy: process.env.TRUST_PROXY || 'no',
    bugsnagKey: process.env.BUGSNAG_KEY || false,
    secureMode: process.env.SECURE_MODE || false,
    db_uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/paylink',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'gospel1988',
    database: process.env.DB_NAME || 'bucksng',
    baseUri: process.env.BASE_URI || 'http://localhost:3000',
    mandrill_key: process.env.MANDRILL_KEY || 'uRXZG7lt5FCItoL8XF9p3Q',
    jwt_secret: process.env.JWT_SECRET || 'Pa$$W0rd',
    s3Bucket: process.env.S3_BUCKET || 'titanbucks',
    aws_id: process.env.AWS_ACCESS_KEY_ID || 'AKIAJWPL4XSNHW6GTIZA',
    aws_key: process.env.AWS_SECRET_ACCESS_KEY || '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',

};
