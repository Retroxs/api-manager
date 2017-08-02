/**
 * Created by HUI on 2017/8/2.
 */
const mongoose = require('mongoose');
const moduleSchema = require('../models/module');
const ModuleModel = mongoose.model('Module');

class homeController {
  static async getHomePage(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('index', {modules: res});
  }

  static async getCreateModel(ctx) {
    return ctx.render('createModel');
  }

  static async getApiInfo(ctx) {
      const res = await ModuleModel.find({});
    return ctx.render('apiInfo', {modules: res});
  }

  static async getCreateApiInfo(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('createApiInfo',{modules:res});
  }

  static async getCreateApiByModule(ctx) {
    const module = ctx.params.module;
    const res = await ModuleModel.find({});
    return ctx.render('createApiInfo',{modules:res,selected:module});
  }

  static async getUpdateApiInfo(ctx) {
    return ctx.render('createApiInfo');
  }
}

module.exports = homeController;
