/**
 * Created by HUI on 2017/7/31.
 */
import Koa from "koa";
import views from "koa-views";
import koa_router from "koa-router";
import bodyParser from "koa-bodyparser";// 解析request的body
import logger from "koa-logger";
import staticServer from "koa-static";
import db from "./rest/models/db";
import api from "./rest/routes/apis";
import home from "./rest/routes/index";
import modules from "./rest/routes/module";
import path from "path";


const router = koa_router(); // 封装路由
const app = new Koa();

app.use(bodyParser())
  .use(logger())
  .use(staticServer(path.resolve('public')));

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
