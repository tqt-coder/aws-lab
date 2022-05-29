const ip = '';
function callAPI(a, b) {
  $.ajax({
    type: 'POST',
    url: ip + '/account/callapi', //Tên servlet
    data: { first: a, last: b },
    success: function (res) {
      console.log(res);
    },
    error: function (e) {
      console.log(e);
    },
  });
}
