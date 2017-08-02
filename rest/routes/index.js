/**
 * Created by HUI on 2017/8/2.
 */

const router = require('koa-router')();
const pageCtrl = require('../controllers/page');

router
  .get('home', pageCtrl.getHomePage);

module.exports = router;
