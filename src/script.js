// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["Web Developer", "Game Developer", "Content Creator"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});

// auto hide navbar click
$(".click-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// automatic transparent navbar
const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

// fetchData API
async function fetchData(type = "certification") {
  let response;
  type === "certification"
    ? (response = await fetch("certification/certification.json"))
    : (response = await fetch("project/project.json"));
  const data = await response.json();
  return data;
}

function showCertification(certification) {
  let certificationContainer = document.querySelector(
    ".certification .content"
  );
  let certificationHTML = "";
  certification.forEach((certification) => {
    certificationHTML += `
        <div class="box" data-aos="fade-down">
            <img
                draggable="false"
                src="${certification.image}"
                alt="certification"/>
            <div class="desc">
                <h3>
                    ${certification.name}
                </h3>
                <p>By
                    <span>${certification.by}</span>
                </p>
                <div class="credentials">
                    <a class="btn" target="_blank" href="${certification.links.credentials}">
                        view credentials
                        <i class="fas fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>`;
  });
  certificationContainer.innerHTML = certificationHTML;
}
function showProject(project) {
  let projectContainer = document.querySelector(".project .content");
  let projectHTML = "";
  project.slice(0, 90).forEach((project) => {
    projectHTML += `
        <div class="cards" >
    <img draggable="false" src="${project.image}" alt=""/>
    <div class="desc-content d-flex flex-column text-justify">
        <div class="tag">
            <h3>${project.title}</h3>
            <h5>${project.tech}</h5>
        </div>
        <div class="desc">
            <p>
            ${project.desc}
            </p>
            <div class="btns">
                <a
                    href="${project.links.demo}"
                    class="btn"
                    target="_blank">
                    <i class="fas fa-eye"></i>
                    Demo
                </a>
                <a
                    href="${project.links.code}"
                    class="btn"
                    target="_blank">
                    <i class="fas fa-code"></i>
                    Code
                </a>
            </div>
        </div>
    </div>
</div>`;
  });
  projectContainer.innerHTML = projectHTML;
}
fetchData("certification").then((data) => {
  showCertification(data);
});
fetchData("project").then((data) => {
  showProject(data);
});

// loadmore button
const loadmore = document.querySelector(".loadmore-btn");

let currentItems = 3;
loadmore.addEventListener("click", () => {
  const elementList = [
    ...document.querySelectorAll(".certification .content .box"),
  ];

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].classList.add("d-block");
    }
  }
  currentItems += 3;

  if (currentItems >= elementList.length) {
    loadmore.classList.add("d-none");
  }
});

// animate on scroll (AOS)
AOS.init();

// disable inspect element or dev mode
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

document.onkeydown = function (e){
  if (event) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
}

// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});

// scroll reveal animation content
const srtop = ScrollReveal({
  origin: "top",
  distance: "90px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content .intro h3", { delay: 300 });
srtop.reveal(".home .content .intro p", { delay: 300 });
srtop.reveal(".home .content .intro a", { delay: 400 });

srtop.reveal(".home .image", { delay: 600 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });

srtop.reveal(".about .cv-btn", { delay: 200 });


/**
 * @type {import("pixi.js").Application}
 */
let app;

/**
 * @type {import("pixi.js")}
 */
const pixi = PIXI;

function initPixi() {
  app = new pixi.Application({
    backgroundAlpha: 0,
    width: "470",
    height: "440"
  });

  var image = pixi.Sprite.from("assets/img/logoanime-removebg-preview.png");
  // image.width = "432";
  // image.height = "575";
  app.stage.addChild(image);

  displacementSprite = pixi.Sprite.from("assets/download.png");
  displacementFilter = new pixi.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = pixi.WRAP_MODES.MIRRORED_REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];

  app.renderer.view.style.transform = "scale(1)";

  displacementSprite.scale.x = 9;
  displacementSprite.scale.y = 9;
  animate();
}
function animate() {
  displacementSprite.x += 10;
  displacementSprite.y += 4;
  requestAnimationFrame(animate);
}

initPixi();

document.querySelector("#pp").replaceWith(app.view);

let tempType = "";
let modal = document.getElementById("modal");
let container = document.getElementById("container");
let loading = document.getElementById("loadingLogo");

const animeSosmed = anime({
  targets: "#socialMedia .list-group .item",
  autoplay: false,
  translateY: -10,
  direction: "alternate",
  loop: true,
  delay: function (el, i, l) {
    return i * 200;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 500;
  }
});
const animeSkills = anime({
  targets: "#skills .list-group .item",
  autoplay: false,
  translateY: -10,
  direction: "alternate",
  loop: true,
  delay: function (el, i, l) {
    return i * 50;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 50;
  }
});
const animeCert = anime({
  targets: "#certificate .list-group .item",
  autoplay: false,
  keyframes: [{ scale: 0.1, duration: 200 }, { scale: 1 }],
  duration: 2000
});
const animeProject = anime({
  targets: "#projects .list-group .item",
  autoplay: false,
  loop: true,
  keyframes: [{ rotateZ: 1 }, { rotateZ: -1 }, { rotateZ: 0 }],
  duration: 2000
});
const animeLoading = anime({
  targets: "#loadingLogo .logo svg",
  loop: true,
  rotate: "1turn",
  easing: "linear",
  duration: 990
});

const sosMed = document.getElementById("socialMedia");
const certi = document.getElementById("certificate");
const prjct = document.getElementById("projects");
const skills = document.getElementById("skills");

/**
 * @param {MouseEvent} ev
 */
function handleList(ev) {
  console.log(ev.getAttribute("listType"));
  const type = ev.getAttribute("listType");
  // document.getElementById("container").style.opacity = "0.3";
  // document.getElementById("container").style.filter = "blur(5px)";

  modal.classList.remove("hide");
  modal.classList.add("appear");
  setTimeout(() => {
    modal.style.display = "block";
  }, 100);

  switch (type) {
    case "sosmed": {
      sosMed.classList.remove("hide");
      sosMed.classList.add("appear");
      setTimeout(() => {
        sosMed.style.display = "block";
        animeSosmed.play();
      }, 100);
      tempType = type;
      break;
    }
    case "certificate": {
      certi.classList.remove("hide");
      certi.classList.add("appear");
      setTimeout(() => {
        certi.style.display = "block";
        animeCert.play();
      }, 100);
      tempType = type;
      break;
    }
    case "projects": {
      prjct.classList.remove("hide");
      prjct.classList.add("appear");
      setTimeout(() => {
        prjct.style.display = "block";
        animeProject.play();
      }, 100);
      tempType = type;
      break;
    }

    case "skills": {
      skills.classList.remove("hide");
      skills.classList.add("appear");
      setTimeout(() => {
        skills.style.display = "block";
        animeSkills.play();
      }, 100);
      tempType = type;
      break;
    }
  }
}

function closeTab() {
  modal.classList.add("hide");
  modal.classList.remove("appear");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);

  switch (tempType) {
    case "sosmed": {
      sosMed.classList.remove("appear");
      sosMed.classList.add("hide");
      setTimeout(() => {
        sosMed.style.display = "none";
      }, 300);
      tempType = "";
      animeSosmed.restart();
      animeSosmed.pause();
      break;
    }

    case "certificate": {
      certi.classList.remove("appear");
      certi.classList.add("hide");
      setTimeout(() => {
        certi.style.display = "none";
      }, 300);
      tempType = "";
      animeCert.restart();
      animeCert.pause();
      break;
    }

    case "projects": {
      prjct.classList.remove("appear");
      prjct.classList.add("hide");
      setTimeout(() => {
        prjct.style.display = "none";
      }, 300);
      tempType = "";
      animeProject.restart();
      animeProject.pause();

      break;
    }

    case "skills": {
      skills.classList.remove("appear");
      skills.classList.add("hide");
      setTimeout(() => {
        skills.style.display = "none";
      }, 300);
      tempType = "";
      animeSkills.restart();
      animeSkills.pause();
      break;
    }
  }
  // document.getElementById("container").style.opacity = "1";
  // document.getElementById("container").style.filter = "blur(0)";
}

// Handle Outside modal box
/**
 * @param {MouseEvent} ev
 */
window.onclick = (ev) => {
  if (ev.target === modal) {
    closeTab();
  }
};

/**
 *
 * @param {KeyboardEvent} ev
 */
window.onkeyup = (ev) => {
  if (modal.style.display !== "none" && ev.key === "Escape") {
    closeTab();
  }
};

addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    animeLoading.pause();
    container.classList.add("appear");
    loading.classList.add("hide");
  }, 2000);

  setTimeout(() => {
    container.style.display = "block";
    loading.style.display = "none";
  }, 2500);
});
