$(document).ready(function () {

  for (i = 1; i < 11; i++) {
    $(".grid-" + i).prepend('<div class=container><div class=image><a class=focus href=#><img src=https://picsum.photos/640/480/?random></a></div><div class=card><div class=section-title><h1>' + lorem.ipsum('lorem_w4') + '</h1></div><div class=caption>' + lorem.ipsum('p6') + '</div><div class=post-links><div class=likes><a href=#>&hearts;' + Math.floor(Math.random() * Math.floor(99)) + '</a></div><div class=read-more><a href=#>Read More</a></div></div>');
  }

  $('.caption').readmore({
    moreLink: '<a href="#">Read more</a>',
    collapsedHeight: 200,
    afterToggle: function (trigger, element, expanded) {
      if (!expanded) { // The "Close" link was clicked
        $('html, body').animate({
          scrollTop: element.offset().top
        }, {
          duration: 100
        });
      }
    }
  });

});
