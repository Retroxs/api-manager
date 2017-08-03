/**
 * Created by HUI on 2017/8/1.
 */

import koa_router from 'koa-router';
import apiCtrl from '../controllers/api';

const router = koa_router();

router
  .get('/get', apiCtrl.getApiList)
  .get('/get/:module', apiCtrl.getApiListByModule)
  .post('/create', apiCtrl.createApi)
  .put('/update/:id', apiCtrl.updateApi)
  .delete('/remove/:id', apiCtrl.removeApi);

export default router;
