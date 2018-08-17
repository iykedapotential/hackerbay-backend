# HackerBay Interview Backend Challenge

A simple stateless microservice in Nodejs with the following functionalities -
- Authentication
- JSON patching
- Image Thumbnail Generation

## Getting Started

clone the repository
```sh
 $ git clone <repo-url> hackerbay-backend
 ```

install dependencies:
```sh
 $ cd hackerbay-backend && npm install
```

## Unit tests

*To run the Unit Test Scripts*

```sh
$ npm test
```

## Running the app

*To run the app, set the following env variables*

- BUGSNAG_KEY
- NODE_ENV
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- CLOUDINARY_NAME
- JWT_SECRET

*Start the app*

```sh
$ npm start
```

## Documentation

*You can find the API documentation at the `/docs` link of your project. E.G. [http://localhost:3000/docs](http://localhost:3000/docs)*

The documantation follows the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)

The `swagger.yaml` file for this project can be found in the `swagger` directory.

If you want to edit the `swagger.yaml` for this project, install `swagger-node` globally.

```sh
$ npm install -g swagger
```

Then load the swagger yaml editor

```sh
$ swagger project edit
```

For more information on how `swagger-node` works, Read the [documentation here](https://github.com/swagger-api/swagger-node/blob/master/docs/README.md)

or by using docker

```sh
$ docker-compose up
```

## API Response Standard

> Success

```json
{
    "status" : "success",
    "data" : {
        "usefuldata" : [
            { "id" : 1, "title" : "A blog post", "body" : "Some useful content" },
            { "id" : 2, "title" : "Another blog post", "body" : "More content" },
        ]
     }
}

```

> Error

```json
{
    "status" : "error",
    "message" : "Unable to process your request",
	"code": "01",
	"data": {
		"someerrordata": [
		{"whatever":"you put here"}
		]
	}
}
```

*`code` and `data` is optional in an error response*


> Fail

```json
{
    "status" : "fail",
    "data" : { "title" : "A title is required" }
}
```
