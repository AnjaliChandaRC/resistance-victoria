//  AOS======================
AOS.init({
  once: true,
  duration: 1500,
});
// AUTOMATIC-YEAR-CHANGER
const d = new Date();
document.getElementById("year-changer").innerHTML = d.getFullYear();

// ===============BACK-TO-TOP=================
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("vid").play();
// YOUR WORLD GAME BOARD SLICK SLIDER 

$('.world-game-slider').slick({
  dots: true,
  infinite: true,
  variableWidth: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  // autoplay: true,
  // autoplaySpeed: 1000,
  nextArrow: ".next",
  prevArrow: ".prev",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
