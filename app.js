const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const serviceRouter = require('./services/services.route');

const PORT = 4000;

app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.use(serviceRouter.routes());

app.listen(PORT, () => {
    console.log('Server has been started');
});