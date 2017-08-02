/**
 * Created by tao on 2017/8/2.
 */
$('.sendInfo').on('click', function () {
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
  json.body = $('input[name="body"]').val()
  json.params = $('input[name="params"]').val()
  json.query = $('input[name="query"]').val()

  console.log(json)
})
