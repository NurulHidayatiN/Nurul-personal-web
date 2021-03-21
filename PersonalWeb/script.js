$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
      $('.navbar').addClass('hidden');
    }
  });
});
