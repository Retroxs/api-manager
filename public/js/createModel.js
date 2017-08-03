/**
 * Created by tao on 2017/8/2.
 */
$(document).ready(function () {
  $('.sendModel').on('click', function () {
    var label = $('.createModel input').val()

    if (label === ''){
      return
    }
    var json ={
      label: label
    }
    $.ajax({
      type: "POST",
      url: "/modules/create",
      data: json,
      success: function () {
        window.location.href = '/apiInfo'
      },
      error:function (res) {
        alert(res.responseJSON.msg)
      }
    })
  })
})



