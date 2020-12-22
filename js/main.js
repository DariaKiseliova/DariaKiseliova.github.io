const btn = document.getElementById("btn");
btn.onclick = function () {
  let img = document.querySelector(".logo");
  img.style.display = "none";
};

$(window).scroll(function () {
  $(".advantages").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 650) {
      $(this).addClass("fadeInUp");
    }
  });
});
