$('#all').click(function() {
  $('.vn').removeClass('hide');
  $('.us').removeClass('hide');
  $('.asia').removeClass('hide');
})

$('#vn').click(function() {
  $('.us').addClass('hide');
  $('.asia').addClass('hide');
})

$('#us').click(function() {
  $('.vn').addClass('clk');
  $('.asia').addClass('clk');
})

$('#asia').click(function() {
  $('.vn').addClass('clk');
  $('.us').addClass('clk');
})