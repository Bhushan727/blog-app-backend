const express = require('express');

const server = require('../Controllers/data')

const dataRouter = express.Router()

dataRouter.route('/details')
    .get(server.apiController)

module.exports = dataRouter;