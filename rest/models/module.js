/**
 * Created by HUI on 2017/8/1.
 */
import mongoose from "mongoose";

const ModuleSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
    index: { unique: true, dropDups: true },
  },
});

module.exports = mongoose.model('Module', ModuleSchema);
