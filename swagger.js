const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Bookin System API",
    description: "Documentation for Bookin System API",
  },
  host: "localhost:8080",
  schemes: ["http"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  components: {
    schemas: {
      error: {
        title: "Root Type for error",
        description: "error",
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
        example: {
          error: "Error description",
        },
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
