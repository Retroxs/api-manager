/**
 * Created by HUI on 2017/8/2.
 */

import koa_router from 'koa-router';
import pageCtrl from '../controllers/page';

const router = koa_router();

router
  .get('/', pageCtrl.getHomePage)
  .get('createModel', pageCtrl.getCreateModel)
  .get('apiInfo', pageCtrl.getApiInfo)
  .get('createApiInfo', pageCtrl.getCreateApiInfo)
  .get('updateApiInfo/:id', pageCtrl.getUpdateApiInfo)
  .get('createApiInfo/:module', pageCtrl.getCreateApiByModule);

export default router;
