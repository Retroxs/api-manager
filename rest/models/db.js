/**
 * Created by HUI on 2017/8/2.
 */

import mongoose from 'mongoose';
import config from '../../config/common';

// mongoose.set('debug', mongodb.debug);
mongoose.connect(config.mongo.uri, config.mongo.options);

// 连接成功
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${config.mongo.uri}`);
});

// 连接失败
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});
