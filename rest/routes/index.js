/**
 * Created by HUI on 2017/8/2.
 */

const router = require('koa-router')();
const pageCtrl = require('../controllers/page');

router
  .get('home', pageCtrl.getHomePage)
  .get('createModel', pageCtrl.getCreateModel)
  .get('apiInfo', pageCtrl.getApiInfo)
  .get('createApiInfo', pageCtrl.getCreateApiInfo)
  .get('updateApiInfo', pageCtrl.getUpdateApiInfo)
  .get('createApiInfo/:module', pageCtrl.getCreateApiByModule)

module.exports = router;
