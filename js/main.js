if (document.querySelector(".menu-btn") !== null) {
  const menu_btn = document.querySelector(".menu-btn");
  const body = document.body;
  const header = document.querySelector(".main-header");
  menu_btn.addEventListener("click", function () {
    header.classList.toggle("active");
    body.classList.toggle("overflow");
  });
}

Fancybox.bind("[data-fancybox]", {
  //
});

// if (document.querySelector(".tabs") !== null) {
//   const tab = document.querySelector(".tabs");
//   const tabButtons = tab.querySelectorAll('[role="tab"]');
//   const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

//   function tabClickHandler(e) {
//     console.log(123);
//     //Hide All Tabpane
//     tabPanels.forEach((panel) => {
//       // panel.hidden = "true";
//       panel.style.display = "none";
//     });

//     //Deselect Tab Button
//     tabButtons.forEach((button) => {
//       button.setAttribute("aria-selected", "false");
//     });

//     //Mark New Tab
//     e.currentTarget.setAttribute("aria-selected", "true");

//     //Show New Tab
//     const { id } = e.currentTarget;

//     const currentTab = tabPanels.find(
//       (panel) => panel.getAttribute("aria-labelledby") === id
//     );

//     // currentTab.hidden = false;
//     currentTab.style.display = null;
//   }

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", tabClickHandler);
//     console.log(button);
//   });
// }

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// if (document.querySelectorAll(".clients-cont") !== null) {
//   let elementsArray = document.querySelectorAll(".clients-cont");
//   window.addEventListener("scroll", fadeIn);
//   function fadeIn() {
//     for (var i = 0; i < elementsArray.length; i++) {
//       var elem = elementsArray[i];
//       var distInView =
//         elem.getBoundingClientRect().top - window.innerHeight + 0;
//       console.log(distInView);
//       if (distInView < 0) {
//         elem.classList.add("inView");
//       } else {
//         elem.classList.remove("inView");
//       }
//     }
//   }
//   fadeIn();
// }

// if (document.querySelectorAll(".accordion-header") !== null) {
//   const accordionHeaders = document.querySelectorAll(".accordion-header");

//   accordionHeaders.forEach((header) => {
//     header.addEventListener("click", () => {
//       const item = header.parentElement;
//       const openItem = document.querySelector(".accordion-item.active-a");

//       // لو فيه عنصر مفتوح غير الحالي → يقفله
//       if (openItem && openItem !== item) {
//         openItem.classList.remove("active-a");
//       }

//       // يقلب حالة العنصر الحالي (فتح / غلق)
//       item.classList.toggle("active-a");
//     });
//   });
// }
// if (document.querySelectorAll("mySelect") !== null) {
//   const select = document.getElementById("mySelect");
//   select.addEventListener("change", () => {
//     if (select.value) select.classList.add("selected");
//   });
// }
const heroSwiper = new Swiper(".hero .heroSwiper", {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".hero .swiper-button-next",
    prevEl: ".hero .swiper-button-prev",
  },
  pagination: {
    el: ".hero .swiper-pagination",
  },
  // mousewheel: true,
  keyboard: true,
});

const companiesSwiper = new Swiper(".companies .companies-Swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,

  pagination: {
    el: ".companies .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".companies .swiper-button-next",
    prevEl: ".companies .swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  // mousewheel: true,
  keyboard: true,
});
const testimonialsSwiper = new Swiper(".testimonials .testimonials-Swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,

  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  // mousewheel: true,
  keyboard: true,
});
const newsSwiper = new Swiper(".news .news-Swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,

  pagination: {
    el: ".news .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".news .swiper-button-next",
    prevEl: ".news .swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  // mousewheel: true,
  keyboard: true,
});

if (document.querySelector(".tabs") !== null) {
  const tab = document.querySelector(".tabs");
  const tabButtons = tab.querySelectorAll('[role="tab"]');
  const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

  function tabClickHandler(e) {
    console.log(123);
    //Hide All Tabpane
    tabPanels.forEach((panel) => {
      // panel.hidden = "true";
      panel.style.display = "none";
    });

    //Deselect Tab Button
    tabButtons.forEach((button) => {
      button.setAttribute("aria-selected", "false");
    });

    //Mark New Tab
    e.currentTarget.setAttribute("aria-selected", "true");

    //Show New Tab
    const { id } = e.currentTarget;

    const currentTab = tabPanels.find(
      (panel) => panel.getAttribute("aria-labelledby") === id,
    );

    // currentTab.hidden = false;
    currentTab.style.display = null;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", tabClickHandler);
    console.log(button);
  });
}
