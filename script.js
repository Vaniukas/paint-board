$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }
});



$(document).ready(function() {
  $(".unit").hover(function() {
      $(this).addClass("hovered");
  });
});


$('.reset').click(function() {
  $('.unit').removeClass("hovered");
  for(var x = 0; x < z; x++) {
      for(var y = 0; y < z; y++) {
          var unit = $("<div class='unit'></div>");
          unit.appendTo('#container');
      };
  };
});
