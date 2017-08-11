/**
 * Created by HUI on 2017/8/11.
 */

import mongoose from 'mongoose';

const HostSchema = mongoose.Schema({
    host:{
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/.test(v);
        },
        message: '{VALUE} is not a valid host!'
      },
      index: { unique: true, dropDups: true },
    }
});
mongoose.model('Host', HostSchema);
