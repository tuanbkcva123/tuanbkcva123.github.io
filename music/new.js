$(document).ready(function() {
  $('.blog_item').click(function() {
      var category = $(this).attr('id');
          if(category == 'all') {
              $('.bln').addClass('hide');
              setTimeout(function() {
                $('.bln').removeClass('hide')
            }, 300)
          } else {
              $('.bln').addClass('hide');
              setTimeout(function() {
                  $('.' + category).removeClass('hide')
              }, 300)
          }
  })

  $('#ball').click(function() {
      $(this).addClass('clk');
      $('#bvn').removeClass('clk');
      $('#bus').removeClass('clk');
      $('#basia').removeClass('clk')
  })

  $('#bvn').click(function() {
      $(this).addClass('clk');
      $('#ball').removeClass('clk');
      $('#bus').removeClass('clk');
      $('#basia').removeClass('clk')
  })

  $('#bus').click(function() {
      $(this).addClass('clk');
      $('#ball').removeClass('clk');
      $('#bvn').removeClass('clk');
      $('#basia').removeClass('clk')
  })

  $('#basia').click(function() {
      $(this).addClass('clk');
      $('#ball').removeClass('clk');
      $('#bvn').removeClass('clk');
      $('#bus').removeClass('clk')
  })
})