$(function(){
  var seuss = $("#seuss");
  var christmasTree = $('#christmas');

  $(window).bind("scroll", function() {
    var $this = $(this);
    if ($this.scrollTop() >= 300) {
      seuss.removeClass("fix-height");
    } else {
      seuss.addClass("fix-height");
    }
  });
});

$(function(){
  $(window).bind("scroll", function() {
    var $this = document.getElementById('slide4');
    if ($this.scrollTop() >= 300) {
      document.getElementById('#slide4').style.color = "red";
    }
  });
});
