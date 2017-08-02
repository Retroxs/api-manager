/**
 * Created by HUI on 2017/8/2.
 */

class homeController {
  static async getHomePage(ctx) {
    return ctx.render('index');
  }
}

module.exports = homeController;
