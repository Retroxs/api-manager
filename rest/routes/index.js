/**
 * Created by HUI on 2017/8/2.
 */

import koa_router from 'koa-router';
import pageCtrl from '../controllers/page';
import testCtrl from '../controllers/apitest';

const router = koa_router();

router
  .get('/', pageCtrl.getHomePage)
  .get('createModel', pageCtrl.getCreateModel)
  .get('updateModel/:id', pageCtrl.getUpdateModel)
  .get('apiInfo', pageCtrl.getApiInfo)
  .get('createApiInfo', pageCtrl.getCreateApiInfo)
  .get('updateApiInfo/:id', pageCtrl.getUpdateApiInfo)
  .get('moduleList', pageCtrl.getModuleList)
  .get('createApiInfo/:module', pageCtrl.getCreateApiByModule)
  .post('testapi',testCtrl.request)

export default router;
