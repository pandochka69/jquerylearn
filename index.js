function slowScroll(id) {
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    500
  );
}

$(document).on("scroll", function () {
  if ($(window).scrollTop() === 0) $("header").removeClass("fixed");
  else $("header").attr("class", "fixed");
});

$(document).ready(function () {
  let $cursorX = 0, $cursorY = 0, $top = 0, $left = 0, $leftd = 0, $topd = 0;
  // получаем координаты курсора
  $(document).mousemove(e => {
    $cursorX = e.clientX;
    $cursorY = e.clientY;
  });
  // точка, находится ровно там, где и курсор
  setInterval(() => {
    $leftd += ($cursorX - $leftd);
    $topd += ($cursorY - $topd);
    $('.dot').css({ left: $leftd + 'px', top: $topd + 'px' });
  }, 1);
  // окружность доходит до курсора, но замедленно
  setInterval(() => {
    $left += ($cursorX - $left) / 10;
    $top += ($cursorY - $top) / 10;
    $('.cursor').css({ left: $left + 'px', top: $top + 'px' });
  }, 6);

});