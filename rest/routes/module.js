/**
 * Created by HUI on 2017/8/1.
 */

import koa_router from 'koa-router';
import moduleCtrl from '../controllers/module';

const router = koa_router();

router
  .get('/get', moduleCtrl.getModuleList)
  .post('/create', moduleCtrl.createModule)
  .put('/update/:id', moduleCtrl.updateModule)
  .delete('/remove/:id', moduleCtrl.removeModule);

export default router;
