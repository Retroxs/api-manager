/**
 * Created by HUI on 2017/8/1.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const moduleSchema = require('../models/module');

const ModuleModel = mongoose.model('Module');

class ModuleController {
  /**
   * 获取所有模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getModuleList(ctx) {
    const res = await ModuleModel.find({});
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 创建模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createModule(ctx) {
    const data = ctx.request.body;
    const { label } = data;
    if (!label) return ctx.error({ msg: '模块名不能为空' });
    const isExist = await ModuleModel.findOne({ label });
    if (isExist) return ctx.error({ msg: '模块已存在' });
    const res = await ModuleModel.create(data);
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 更新模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async updateModule(ctx) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    const { label } = data;
    if (!label) return ctx.error({ msg: '模块名不能为空' });
    const res = await ModuleModel.findByIdAndUpdate(id, data);
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 删除模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async removeModule(ctx) {
    const id = ctx.params.id;
    const res = await ModuleModel.findByIdAndRemove(id);
    if (res) return ctx.success({ msg: 'Success', data: res });
    return ctx.error({ msg: '模块不存在！' });
  }
}

module.exports = ModuleController;
