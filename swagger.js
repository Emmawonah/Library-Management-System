const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
    Version: '3.1.0',
    info: {
        title: 'Library Management System API', // Title of the API
        version: '1.0.0', 
        description: 'API documentation for the Library Management System', 
        contact: {
            name: 'Emmanuel Wonah',
            email: 'oewonah@gmail.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000', 
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Setup Swagger UI
const setupSwaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger docs available at http://localhost:3000/api-docs');
};

module.exports = setupSwaggerDocs;