const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();


app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hotel Booking',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Corrected path to API files
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api', require('./routes/holiday.routes'));
app.use('/api', require('./routes/user.holiday.routes'));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
