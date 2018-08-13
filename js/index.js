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

      if ($this.scrollTop() >= 700) {
        $('#slide3').animate({
          scrollTop: $('#slide3')[0].scrollHeight
        }, 1000);
      }
    });
});
