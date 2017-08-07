/**
 * Created by tao on 2017/8/2.
 */

 function sendModel(id){
    var label = $('.createModel input').val()

    if (label === ''){
      return
    }
    var json ={
      label: label
    }
    $.ajax({
      type: "PUT",
      url: "/modules/update/"+id,
      data: json,
      success: function () {
        window.location.href = '/apiInfo'
      },
      error:function (res) {
        alert(res.responseJSON.msg)
      }
    })
 }



