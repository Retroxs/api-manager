/**
 * Created by HUI on 2017/8/2.
 * @ use 统一try catch处理中间件
 * @ 用于捕获内部错误，输出日志信息
 */

import tracer from 'tracer';

const logger = tracer.colorConsole({
  level: 'error',
  format: '{{timestamp}} <{{title}}> {{file}}(#{{line}}): {{message}}',
  file: 'error.log',
  path: __dirname,
});

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (!err) {
      return ctx.error({ msg: new Error('未知错误!') });
    }
    if (typeof (err) === 'string') {
      return ctx.error({ msg: new Error(err) });
    }
    logger.error(err.stack);
    const {name,message} = err;
    ctx.error({ msg: message || '服务器错误!', error: name || err, status: 400 });
  }
};
