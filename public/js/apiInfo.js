/**
 * Created by tao on 2017/8/2.
 */


$(document).ready(function () {
  getApiList()
  
  $('.apiListMain select').on('change', function () {
    $('.content #apiList').remove()
    getApiList()
  })

})

function getApiList() {
  var label = $('.apiListMain select').val()

  $.ajax({
    type: 'GET',
    url: '/apis/get/' + label,
    success: function (res) {
      [].map.call(res.data, (item, index) => {
        var model = `<div class="apiListMain" id="apiList">
            <p>${item.name}:</p>
            <p>${item.api}</p>
            <button class="edit"><a style="text-decoration: none;color: #fff;" href="/updateApiInfo/${item._id}">编辑</a></button>
            <button class="delete" onclick="deleteApi('${item._id}', this)">删除</button>
        </div>`
        $('.contentList').append(model)
      })

    }
  })
}

function deleteApi(id ,_self) {
  $.ajax({
    type: "delete",
    url: '/apis/remove/' + id,
    success: function () {
      $(_self).parent('.apiListMain').remove()
    }
  })
}

function createApi() {
  var modelName = $('.apiListMain select').val()

  window.location.href = '/createApiInfo/' + modelName
}

function createModel() {
  window.location.href = '/moduleList'
}


