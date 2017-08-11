/**
 * Created by tao on 2017/8/11.
 */
function createHost() {
  window.location.href = '/createHost'
}

function deleteHost(id, _this) {
  $.ajax({
    type: 'DELETE',
    url: '/host/remove/' + id,
    success: function () {
      $(_this).parent().remove()
    },
    error: function (res) {
      alert(res.responseJSON.msg)
    }
  })
}
