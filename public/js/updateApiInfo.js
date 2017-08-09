/**
 * Created by tao on 2017/8/3.
 */
$(document).ready(function () {
  $('.sendInfo').on('click',createApiInfo)
  $('select[name="method"]').on('change', changeMethod)
  changeMethod()
})

function createApiInfo() {
  var id = $(this).attr('_id')

  var json = {
    module: '',
    name: '',
    api: '',
    method: '',
    body: '',
    params: '',
    query: '',
    comment: ''
  }

  json.module = $('select[name="model"]').val()
  json.name = $('input[name="name"]').val()
  json.api = $('input[name="url"]').val()
  json.method = $('select[name="method"]').val()
  json.body = $('input[name="body"]').val().split(',')
  json.params = $('input[name="params"]').val().split(',')
  json.query = $('input[name="query"]').val().split(',')
  json.comment = $('input[name="remark"]').val()

  $.ajax({
    type: 'PUT',
    url: '/apis/update/' + id,
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(json),
    success: function () {
      window.location.href = '/apiInfo'
    },
    error:function (res) {
      alert(res.responseJSON.msg)
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
