/**
 * Created by HUI on 2017/8/1.
 */
const mongoose = require('mongoose');

const ApiSchema = mongoose.Schema({
  module: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  api: String,
  method: String,
  params: Array,
  query: Array,
  body: Array,
});

mongoose.model('Api', ApiSchema);
