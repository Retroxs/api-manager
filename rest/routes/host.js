import koa_router from 'koa-router';
import hostCtrl from '../controllers/host';

const router = koa_router();

router
  .get('/get', hostCtrl.getHostList)
  .post('/create', hostCtrl.createHost)
  .put('/update/:id', hostCtrl.updateHost)
  .delete('/remove/:id', hostCtrl.removeHost);

export default router;
