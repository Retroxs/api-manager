import request from '../middlewares/lib/request'

class Proxy {
  static async request(ctx) {
    let data = ctx.request.body;
    const methods = ['get', 'post', 'put', 'delete'];
    const contentTypes = ['image/jpeg', 'image/png', 'image/gif'];
    let method = data.method;
    let url = data.url;
    if (!method || !url) {
      return ctx.error({ msg: '参数不能为空' });
    }
    if (methods.indexOf(method.toLowerCase()) === -1) {
      return ctx.error({ msg: 'methods不正确' });
    }
    const match = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
    // if (!match.exec(url)) {
      // return ctx.error({ msg: 'url不正确' });
    // }
    let body;
    switch (method.toLowerCase()) {
      case 'get':
        body = await request.getRequest(url);
        break;
      case 'post':
        body = await request.postRequest(url, data.body);
        break;
      case 'put':
        body = await request.putRequest(url, data.body);
        break;
      case 'delete':
        body = await request.deleteRequest(url);
        break;
      default:
        break;
    }

    // if (contentTypes.indexOf(body.headers['content-type']) > -1) {
    //   ctx.body = {'type': 'image', 'url': url}
    //   return false;
    // }
    ctx.body = body.body
  }
}

export default Proxy;
