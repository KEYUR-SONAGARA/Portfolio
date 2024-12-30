$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
      } else {
          $(".header-area").removeClass("sticky");
      }

      updateActiveSection();
  });

  $(".header ul li a").click(function (e) {
      e.preventDefault();
      const target = $(this).attr("href");

      if (target === "#home") {
          $("html, body").animate({ scrollTop: 0 }, 500);
      } else {
          const offset = $(target).offset().top - 40;
          $("html, body").animate({ scrollTop: offset }, 500);
      }

      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
  });

  $("#menuToggle").click(function () {
      $("#sidebarMenu").slideToggle(300);
  });

  ScrollReveal({ distance: "100px", duration: 2000, delay: 200 });
  ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", { origin: "left" });
  ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", { origin: "right" });
  ScrollReveal().reveal(".project-title, .contact-title", { origin: "top" });
  ScrollReveal().reveal(".projects, .contact", { origin: "bottom" });
});

function updateActiveSection() {
  const scrollPosition = $(window).scrollTop();
  if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
  }
  $("section").each(function () {
      const target = $(this).attr("id");
      const offset = $(this).offset().top;
      const height = $(this).outerHeight();
      if (scrollPosition >= offset - 40 && scrollPosition < offset + height - 40) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
      }
  });
}
