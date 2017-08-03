/**
 * Created by HUI on 2017/8/1.
 */

import mongoose from 'mongoose';
import moduleSchema from '../models/module';
import apiSchema from '../models/api';

mongoose.Promise = global.Promise;

const ModuleModel = mongoose.model('Module');
const ApiModel = mongoose.model('Api');

class ApiController {
  /**
   * 获取所有模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getApiList(ctx) {
    const res = await ApiModel.find({});
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 根据模块名查找api
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getApiListByModule(ctx) {
    const module = ctx.params.module;
    const isModuleExist = await ModuleModel.findOne({ label: module });
    if (!isModuleExist) return ctx.error({ msg: '该模块不存在' });
    const res = await ApiModel.find({ module });
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 创建模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createApi(ctx) {
    const data = ctx.request.body;
    const { module, name, api, body, params, query } = data;
    if (!module) return ctx.error({ msg: '模块名不能为空' });
    const isModuleExist = await ModuleModel.findOne({ label: module });
    if (!isModuleExist) return ctx.error({ msg: '该模块不存在' });
    if (!name) return ctx.error({ msg: 'api名称不能为空' });
    if (!api) return ctx.error({ msg: 'api地址不能为空' });
    const res = await ApiModel.create(data);
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 更新模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async updateApi(ctx) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    const { module, name, api, body, params, query } = data;
    if (!module) return ctx.error({ msg: '模块名不能为空' });
    const isModuleExist = await ModuleModel.findOne({ label: module });
    if (!isModuleExist) return ctx.error({ msg: '该模块不存在' });
    if (!name) return ctx.error({ msg: 'api名称不能为空' });
    if (!api) return ctx.error({ msg: 'api地址不能为空' });
    const res = await ApiModel.findByIdAndUpdate(id, data);
    if (res) ctx.success({ msg: 'Success', data: res });
    return ctx.error({ msg: 'api不存在！' });
  }

  /**
   * 删除模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async removeApi(ctx) {
    const id = ctx.params.id;
    const res = await ApiModel.findByIdAndRemove(id);
    if (res) return ctx.success({ msg: 'Success', data: res });
    return ctx.error({ msg: 'api不存在！' });
  }
}

export default ApiController;
