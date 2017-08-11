/**
 * Created by tao on 2017/8/11.
 */
$(function () {
  $('.sendHost').on('click', function () {
    var label = $('.createModel input').val()

    if (label === ''){
      return
    }
    var json ={
      host: label
    }
    $.ajax({
      type: "POST",
      url: "/host/create",
      data: json,
      success: function () {
        window.location.href = '/hostList'
      },
      error:function (res) {
        alert(res.responseJSON.msg)
      }
    })
  })
})
