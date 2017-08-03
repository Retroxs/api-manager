/**
 * Created by HUI on 2017/7/31.
 */
import Koa from 'koa';
import views from 'koa-views';
import koa_router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import staticServer from 'koa-static';
import config from './config/common';
import db from './rest/models/db';
import api from './rest/routes/apis';
import home from './rest/routes/index';
import modules from './rest/routes/module';
import koa_response from './rest/middlewares/response';
import koa_filter from './rest/middlewares/filter';
import path from 'path';

const router = koa_router(); // 封装路由
const app = new Koa();

app
  .use(bodyParser())
  .use(logger())
  .use(staticServer(path.resolve('public')))
  .use(koa_response)
  .use(koa_filter);

app.use(views(`${__dirname}/views`, {
  extension: 'ejs',
}));

router
  .use('/', home.routes())
  .use('/apis', api.routes())
  .use('/modules', modules.routes());

app.use(router.routes());

app.listen(config.port,() => {
  console.log(`app is running on port ${config.port}`);
});
