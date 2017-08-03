/**
 * Created by tao on 2017/8/2.
 */
$(document).ready(function () {
  $('.sendInfo').on('click',createApiInfo)
  $('select[name="method"]').on('change', changeMethod)
  changeMethod()
})

function createApiInfo() {
  var json = {
    module: '',
    name: '',
    api: '',
    method: '',
    body: '',
    params: '',
    query: ''
  }

  json.module = $('select[name="model"]').val()
  json.name = $('input[name="name"]').val()
  json.api = $('input[name="url"]').val()
  json.method = $('select[name="method"]').val()
  json.body = $('input[name="body"]').val().split(',')
  json.params = $('input[name="params"]').val().split(',')
  json.query = $('input[name="query"]').val().split(',')

  $.ajax({
    type: 'POST',
    url: '/apis/create',
    data: json,
    success: function () {
      window.location.href = '/apiInfo'
    }
  })
}

function changeMethod() {
  var method = $('select[name="method"]').val()

  if (method === 'GET' || method === 'DELETE'){
    $('input[name="body"]').parent().css('display','none')
  }else {
    $('input[name="body"]').parent().css('display','block')
  }
}


