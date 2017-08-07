/**
 * Created by HUI on 2017/8/2.
 */
import mongoose from 'mongoose';
import moduleSchema from '../models/module';
import apiScema from '../models/api';

const ModuleModel = mongoose.model('Module');
const ApiModel = mongoose.model('Api');

class homeController {
  static async getHomePage(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('index', {modules: res});
  }

  static async getCreateModel(ctx) {
    return ctx.render('createModel',{title: '新建模版'});
  }

  static async getUpdateModel(ctx) {
    const id = ctx.params.id;
    const res = await ModuleModel.findById(id);
    return ctx.render('createModel',{module:res,title: '更新模版'});
  }

  static async getApiInfo(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('apiInfo', {modules: res});
  }

  static async getCreateApiInfo(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('createApiInfo', {modules: res,title: '创建api信息'});
  }

  static async getCreateApiByModule(ctx) {
    const module = ctx.params.module;
    const res = await ModuleModel.find({});
    return ctx.render('createApiInfo', {modules: res, selected: module,title:'创建api信息'});
  }

  static async getUpdateApiInfo(ctx) {
    const id = ctx.params.id;
    const modules = await ModuleModel.find({});
    const api = await ApiModel.findById(id);
    return ctx.render('createApiInfo', {modules:modules, selected: api.module,api: api,title: '更新api信息'});
  }

  static async getModuleList(ctx) {
    const modules = await ModuleModel.find({});
    return ctx.render('moduleList', {modules:modules});
  }
}

export default homeController;
