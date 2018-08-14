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
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() >= 2000) {
      slide4.addClass("light-background");
    }
  });
});

$(function(){
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() >= 3000) {
      slide4.addClass("darken-background");
    }
  });
});

$(function(){
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() <= 3000) {
      slide4.removeClass("darken-background");
    }
  });
});

$(function(){
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() >= 3500) {
      slide4.removeClass("darken-background");
      slide4.addClass("dark-background");
    }
  });
});

$(function(){
  var slide4 = $("#slide4")
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById("slide4");
    if ($this.scrollTop() <= 3500) {
      slide4.removeClass("dark-background");
    }
  });
});

$(function(){
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() <= 4000) {
      slide4.removeClass("darkest-background");
    }
  });
});

$(function(){
  var slide4 = $('#slide4')
  $(window).bind("scroll", function() {
    var $this = $(this);

    // var $this = document.getElementById('slide4');
    if ($this.scrollTop() >= 4000) {
      slide4.removeClass("dark-background");
      slide4.addClass("darkest-background");
    }
  });
});
