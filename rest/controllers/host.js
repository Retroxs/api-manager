/**
 * Created by HUI on 2017/8/11.
 */
import mongoose from 'mongoose';
import hostSchema from '../models/host';

mongoose.Promise = global.Promise;

const HostModel = mongoose.model('Host');
class HostController {
  /**
   * 获取所有模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getHostList(ctx) {
    const res = await HostModel.find({});
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 创建模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createHost(ctx) {
    const data = ctx.request.body;
    const { host } = data;
    if (!host) return ctx.error({ msg: 'host不能为空' });
    const isExist = await HostModel.findOne({ host });
    if (isExist) return ctx.error({ msg: 'host已存在' });
    const res = await HostModel.create(data);
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 更新模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async updateHost(ctx) {
    const id = ctx.params.id;
    const data = ctx.request.body;
    const { host } = data;
    if (!host) return ctx.error({ msg: 'host不能为空' });
    const res = await HostModel.findByIdAndUpdate(id, data);
    return ctx.success({ msg: 'Success', data: res });
  }

  /**
   * 删除模块
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async removeHost(ctx) {
    const id = ctx.params.id;
    const res = await HostModel.findByIdAndRemove(id);
    if (res) return ctx.success({ msg: 'Success', data: res });
    return ctx.error({ msg: 'host不存在！' });
  }
}

export default HostController;
