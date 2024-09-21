$(window).on("load", function () {
  AOS.init({ once: true, delay: 200 });

  // Hide spinner once the page is fully loaded
  $(".spinner-wrapper").hide();
});

$(document).ready(function () {
  // Initialize sliders
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    asNavFor: ".slider-for",
    focusOnSelect: true,
  });

  // Scroll to top on page load
  $(this).scrollTop(0);

  // Intersection Observer for fade-in effect using jQuery
  const fadeElements = $(".fade-in");
  const observerOptions = { root: null, threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        $(entry.target).css({
          opacity: 1,
          transform: "unset",
          transitionDelay: `${index * 0.2}s`, // Stagger effect
        });
      }
    });
  }, observerOptions);

  fadeElements.each(function () {
    observer.observe(this);
  });

  // Scroll to top button
  const scrollToTopButton = $("#scrollToTop");

  $(window).on("scroll", function () {
    scrollToTopButton.css(
      "display",
      $(this).scrollTop() > 20 ? "block" : "none"
    );
  });

  scrollToTopButton.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });
});
