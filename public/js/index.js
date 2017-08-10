/**
 * Created by tao on 2017/8/2.
 */
var list = $('#list')
var model = $('#model')
var query = $('#query')
var apiList = {}
var count = 0

/**
 * 初始化select和参数列表
 * */
function Initialization() {
  var model = $('#model').val()
  $.ajax({
    type: 'GET',
    url: `/apis/get/${model}`,
    success: function (res) {
      setList(res.data)
    }
  })
}
/**
 * 初始化填写的参数
 * */
function setQueryList() {
  var queryParams = list.find('option:selected').attr('query')
  var params = list.find('option:selected').attr('params')

  var queryList = queryParams.split(',')
  var paramsList = params.split(',')

  var bool = list.find('option:selected').attr('method')

  var comment = list.find('option:selected').attr('comment')

  if (bool == 'GET' || bool == 'DELETE') {
    $('#bodyParams').css('display', 'none')
  } else {
    $('#bodyParams').css('display', 'block')
  }

  query.children().remove()
  $('.remark').html('')

  appendPathList(queryList, 'query')
  appendPathList(paramsList, 'params')

  $('.remark').html(comment)
}
/**
 * 循环参数数组创建dom
 * @param list
 * @param className 类名
 * */
function appendPathList(list, className) {
  [].map.call(list, (item, index) => {
    if (!item || item === 'undefined') {
      return
    }

    var _label = `<label class="title">${item}:</label>`
    var _input = `<input name="${item}" class="${className}"/><br>`

    query.append(_label)
    query.append(_input)
  })
}
/**
 * 循环创建二级select的选项
 * */
function setList(items) {
  var key = model.val()
  list.find('option').remove();
  if (items.length === 0) {
    query.children().remove()
    return
  }

  [].map.call(items, (item, index) => {
    var Node = `<option value="${item.api}" method="${item.method}" query="${item.query}" body="${item.body}" params="${item.params}" comment="${item.comment}">${item.name}</option>`
    list.append(Node)
  })

  setQueryList()
}
/**
 * 循环创建参数的集合对象
 * @param className 类名
 * @param list 参数集合对象
 * */
function setParamsList(className, list) {
  query.find(className).each(function () {
    var name = $(this).attr('name')
    var value = $(this).val()

    list[name] = value
  });
}
/**
 * 根据api请求返回的数据进行格式化显示,同时显示接口信息，最多显示五条记录,大于5个自动顶掉最后一个
 * @param data json数据
 * @param Url 接口链接
 * @param modelName 模块名
 * @param apiName 接口名
 * */
function createJsonList(data, Url, modelName, apiName) {
  var index = $('#json').children().length
  if (index >= 5) {
    $('#json .content:last-child').remove()
  }
  $('#json').prepend(`<div class="content"><p>${modelName}/${apiName}</p><p>${Url}</p><div id="jsonList${count}"></div></div>`)
  $(`#jsonList${count}`).JSONView(data, {collapsed: true})
  count++
}
/**
 * 发送请求方法
 * */
function SendApi() {
  $('#send').on('click', function (e) {
    var control = list.find('option:selected')
    var method = control.attr('method')
    var api = control.val()
    var queryList = {}
    var paramsList = {}
    var modelName = model.val()
    var apiName = list.find('option:selected').text()
    var bodyList = $('#bodyParams textarea').val()

    setParamsList('.query', queryList)
    setParamsList('.params', paramsList)

    for (var key in paramsList) {
      api = api.replace(new RegExp(`{${key}}`), paramsList[key])
    }

    if (method == "GET" || method == "DELETE") {
      axios.post("/testapi", {
        url:api,
        method:method,
        params: queryList
      })
        .then((res) => {
          createJsonList(res.data, api, modelName, apiName)
        })
      // .catch((res) => {
      //   createJsonList(res, api, modelName, apiName)
      // })
    } else {
      if (!isJSON(bodyList)) {
        alert('body参数需要写成json格式')
        return
      }
      axios.post("/testapi", {
        url:api,
        method:method,
        params: queryList,
        body:JSON.parse(bodyList)
      })
        .then((res) => {
          createJsonList(res.data, api, modelName, apiName)
        })
    }

  })
}

function isJSON(str, pass_object) {
  if (pass_object && isObject(str)) return true;

  if (!isString(str)) return false;

  str = str.replace(/\s/g, '').replace(/\n|\r/, '');

  if (/^\{(.*?)\}$/.test(str))
    return /"(.*?)":(.*?)/g.test(str);

  if (/^\[(.*?)\]$/.test(str)) {
    return str.replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/},{/g, '}\n{')
      .split(/\n/)
      .map(function (s) {
        return isJSON(s);
      })
      .reduce(function (prev, curr) {
        return !!curr;
      });
  }

  return false;
}

function isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

window.onload = function () {
  Initialization()
  SendApi()
  model.on('change', Initialization)
  list.on('change', setQueryList)
}
