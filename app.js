/**
 * Created by HUI on 2017/7/31.
 */
const Koa = require('koa');
const views = require('koa-views');
const router = require('koa-router')(); // 封装路由
const bodyParser = require('koa-bodyparser'); // 解析request的body
const logger = require('koa-logger');
const staticServer = require('koa-static');
const db = require('./rest/models/db');
const home = require('./rest/routes/index');
const api = require('./rest/routes/apis');
const modules = require('./rest/routes/module');
const path = require('path');

const app = new Koa();

app.use(bodyParser())
  .use(logger())
  .use(staticServer(path.resolve('resource/dist')));

app.use(views(`${__dirname}/views`, {
  extension: 'ejs',
}));

// router
app.use(require('./rest/middlewares/response'));
app.use(require('./rest/middlewares/filter'));

router
  .use('/', home.routes())
  .use('/apis', api.routes())
  .use('/modules', modules.routes());

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000');
