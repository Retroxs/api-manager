/**
 * Created by HUI on 2017/8/2.
 */
import mongoose from 'mongoose';
import moduleSchema from '../models/module';
import apiSchema from '../models/api';
import hostSchema from '../models/host';

const ModuleModel = mongoose.model('Module');
const ApiModel = mongoose.model('Api');
const HostModel = mongoose.model('Host');

class homeController {
  static async getHomePage(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('index', {modules: res});
  }

  static async getCreateModel(ctx) {
    return ctx.render('createModel',{title: '新建模块'});
  }

  static async getUpdateModel(ctx) {
    const id = ctx.params.id;
    const res = await ModuleModel.findById(id);
    return ctx.render('createModel',{module:res,title: '更新模块'});
  }

  static async getApiInfo(ctx) {
    const res = await ModuleModel.find({});
    return ctx.render('apiInfo', {modules: res});
  }

  static async getCreateApiInfo(ctx) {
    const res = await ModuleModel.find({});
    const host = await HostModel.find({});
    return ctx.render('createApiInfo', {hosts:host,modules: res,title: '创建api信息'});
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
    const host = await HostModel.find({});
    return ctx.render('createApiInfo', {host:api.host,hosts:host,modules:modules, selected: api.module,api: api,title: '更新api信息'});
  }

  static async getModuleList(ctx) {
    const modules = await ModuleModel.find({});
    return ctx.render('moduleList', {modules:modules});
  }

  static async getHostList(ctx) {
    const modules = await HostModel.find({})
    console.log(modules)
    return ctx.render('hostList', {modules:modules})
  }

  static async getCreateHost(ctx) {
    return ctx.render('createHost', {title: '创建Host信息',label: '创建Host:'})
  }

  static async getUpdateHost(ctx) {
    const id = ctx.params.id;
    const module = await HostModel.findById(id);
    return ctx.render('createHost', {title: '更新Host信息', module: module,label: '更新Host:'})
  }
}

export default homeController;
