/**
 * Created by HUI on 2017/8/2.
 */

import koa_router from 'koa-router';
import pageCtrl from '../controllers/page';
import testCtrl from '../controllers/apitest';
import hostCtrl from '../controllers/host'

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
  .get('hostList', pageCtrl.getHostList)
  .get('createHost', pageCtrl.getCreateHost)
  .get('updateHost/:id', pageCtrl.getUpdateHost)
  .post('testapi',testCtrl.request)

export default router;
