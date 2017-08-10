import request from 'request';

class MyRequest {
  static async getRequest(url) {
    console.log(url)
    return new Promise(function (resolve) {
      request({
        method: 'GET',
        uri: url,
        timeout: 15000,
        json: true
      }, function (err, res, body) {
        resolve(res)
      })
    });
  }

  static async postRequest(url, data, params) {
    return new Promise(function (resolve) {
      request({
        uri: url,
        method: 'POST',
        timeout: 15000,
        json: true,
        headers: {
          "content-type": "application/json",
        },
        body: data
      }, function (err, res, body) {
        resolve(res)
      })
    });
  }

  static async putRequest(url, data, params) {
    return new Promise(function (resolve) {
      request({
        uri: url,
        timeout: 15000,
        method: 'PUT',
        json: true,
        headers: {
          "content-type": "application/json",
        },
        body: data
      }, function (err, res, body) {
        resolve(res)
      })
    });
  }

  static async deleteRequest(url) {
    return new Promise(function (resolve) {
      request({
        method: 'DELETE',
        uri: url,
        timeout: 15000,
        json: true
      }, function (err, res, body) {
        resolve(res)
      })
    });
  }
}

export default MyRequest;
