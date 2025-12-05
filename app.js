const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

var typed = new Typed("#typing-role", {
  strings: ["Data Scientist", "AI Engineer", "Bioinformatics Enthusiast"],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
});

document.querySelectorAll(".project-item").forEach((project) => {
  let images = project.querySelectorAll(".project-img img");
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }

  project.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  });

  project.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  });

  // Tampilkan gambar pertama saat halaman dimuat
  showSlide(currentIndex);
});

let scrollContainer = document.querySelector(".certification-list");

function prevCert() {
  scrollContainer.scrollBy({ left: -400, behavior: "smooth" });
}

function nextCert() {
  scrollContainer.scrollBy({ left: 400, behavior: "smooth" });
}
