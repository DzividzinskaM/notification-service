'use strict';

const Router = require('koa-router');
const serviceRouter = new Router();

const ServiceController = require('./services.controller');

serviceRouter.get("/:pet", ServiceController.produceMessage);

module.exports = serviceRouter;