/**
 * Created by HUI on 2017/8/1.
 */

const router = require('koa-router')();
const apiCtrl = require('../controllers/api');

router
  .get('/get', apiCtrl.getApiList)
  .get('/get/:module', apiCtrl.getApiListByModule)
  .post('/create', apiCtrl.createApi)
  .put('/update/:id', apiCtrl.updateApi)
  .delete('/remove/:id', apiCtrl.removeApi);

module.exports = router;
