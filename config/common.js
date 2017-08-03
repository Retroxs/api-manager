/**
 * Created by HUI on 2017/8/1.
 */

export default {
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/api',
    options: {
      useMongoClient: true,
    },
    debug: false,
  },
  port: '3000',
  proxy_host:'http://127.0.0.1:8080'
};
