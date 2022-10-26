const express = require('express');

const server = require('../Controllers/data')

const dataRouter = express.Router()

dataRouter
    .route('/home')
    .get(server.apiController)

module.exports = dataRouter;