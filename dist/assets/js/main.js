$(document).ready(function () {
  /*****accordiance */
  // (Optional) Active an item if it has the class "is-active"
  $(".accordion > .accordion-item.is-active")
    .children(".accordion-panel")
    .slideDown();

  $(".accordion > .accordion-item").click(function () {
    // Cancel the siblings
    $(this)
      .siblings(".accordion-item")
      .removeClass("is-active")
      .children(".accordion-panel")
      .slideUp();
    // Toggle the item
    $(this)
      .toggleClass("is-active")
      .children(".accordion-panel")
      .slideToggle("ease-out");
  });
  /****reviewe carousel***/
  let arrows = {
    left: jQuery(".carousel").data("left-arrow"),
    right: jQuery(".carousel").data("right-arrow"),
  };
  $(".carousel").slick({
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: `<i class="${arrows.left} "></i>`,
    nextArrow: `<i class="${arrows.right}"></i>`,
  });

  $(".slick-dots li:nth-child(1)").html(
    '<button style="background: url(https://i.ibb.co/JQ18QKW/asd.jpg);"></button>'
  );
  $(".slick-dots li:nth-child(2)").html(
    '<button style="background: url(https://i.ibb.co/hKgs8gm/profile.jpg);"></button>'
  );
  $(".slick-dots li:nth-child(3)").html(
    '<button style="background: url(https://i.ibb.co/Q8zzbCR/profile1.jpg);"></button>'
  );
  // $(".slick-dots li:nth-child(4)").html(
  //   '<button style="background: url(https://i.ibb.co/tPFqymw/profile2.jpg);"></button>'
  // );
  $(".slick-dots li:nth-child(4)").html("<p>+10 More</p>");

  /*****video-popup*****/
  $(".vidplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: "v=", // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },

        // you may add here more sources
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });
  /***CounterUp*****/

  $(".counter").counterUp({
    delay: 60,
    time: 3000,
  });
  /***All-page-loader***/
  /**input***/
  $(".text-field-input").on("focus", function () {
    $(this).closest(".field-wrapper").addClass("focused");
  });

  $(".text-field-input").on("blur", function () {
    if ($(this).val() === "") {
      $(this).closest(".field-wrapper").removeClass("focused");
    }
  });
  setTimeout(function () {
    $(".loader_bg").fadeOut();
    jQuery(document.body).removeClass("preloader");
  }, 1000);
});

/**** */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
};

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

/****pricing****/

const tableWrapper = document.querySelector(".table-wrapper");
const switchInputs = document.querySelectorAll(".switch-wrapper input");
const prices = tableWrapper.querySelectorAll(".price");
const toggleClass = "hide";

for (const switchInput of switchInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of prices) {
      price.classList.add(toggleClass);
    }
    const activePrices = tableWrapper.querySelectorAll(
      `.price.${switchInput.id}`
    );
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggleClass);
    }
  });
}
/**** */
