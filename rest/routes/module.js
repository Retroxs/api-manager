/**
 * Created by HUI on 2017/8/1.
 */

const router = require('koa-router')();
const moduleCtrl = require('../controllers/module');

router
  .get('/get', moduleCtrl.getModuleList)
  .post('/create', moduleCtrl.createModule)
  .put('/update/:id', moduleCtrl.updateModule)
  .delete('/remove/:id', moduleCtrl.removeModule);

module.exports = router;
