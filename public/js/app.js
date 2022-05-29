const ip = 'http://34.200.201.169:8888';
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
