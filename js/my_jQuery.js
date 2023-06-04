const array = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "¿",
  "?",
  "¡",
  "!",
  "@",
  "%",
  "&",
  "$",
  "€",
  "¥",
  "£",
  "Ç",
  "ç",
  "¢",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "/",
  "|",
  ".",
  ",",
  ":",
  ";",
  "·",
  "-",
  "_",
  "=",
  "<",
  ">",
  "«",
  "»",
  '"',
  "'",
  "*",
  "+",
  "±",
  "÷",
  "#",
];

const specialChars = {
  a: "á ã à å â ä",
  e: "é ê è ë",
  i: "í î ì ï",
  o: "ó õ ò ö ô ø",
  u: "ú û ù ü",
  A: "Á Ã À Å Â Ä",
  E: "É Ê È Ë",
  I: "Í Î Ì Ï",
  O: "Ó Õ Ò Ö Ô Ø",
  U: "Ú Û Ù Ü",
};

let y = 0;

for (let i = 1; i < array.length + 1; i++) {
  $("#" + i).mouseover(function () {
    if (y != 0) {
      $("#" + y).css("background-color", "rgb(237, 237, 237)");
      $("#" + y).css("color", "black");
    }

    $("#" + i).css("background-color", "#942e14");
    $("#" + i).css("color", "white");

    $("#letragrande").css("margin-bottom", "0vh");

    if (screen.width < 425) {
      $("#letragrande").css("margin-bottom", "5vh");
    }
    y = i;
    let x = array[i - 1];
    document.getElementById("letragrande").innerHTML = x;

    let special = specialChars[x] || "";
    document.getElementById("letras-especiales").innerHTML = special;
  });
}

$("#claro").click(function () {
  $("#cuadroderecha").css("background-color", "white");
  $("#letragrande").css("color", "#942e14");
  $("#letras-especiales").css("color", "#942e14");
});

$("#oscuro").click(function () {
  $("#cuadroderecha").css("background-color", "#942e14");
  $("#letragrande").css("color", "white");
  $("#letras-especiales").css("color", "white");
  $("#oscuro").css("border-color", "white");
});

// RESPONSIVE MENÚ

function openCloseMenu() {
  var mymenu = document.getElementById("menu");

  if (mymenu.classList.contains("menu2", "menu2sep", "menu2tip")) {
    //Si la condición es true (es decir, si tiene la clase),
    //le quitamos al elemento mymenu la clase menuClosed
    mymenu.classList.remove("menu2", "menu2sep", "menu2tip");
  } else {
    //Si la condición es false,
    //le añadimos la clase de menuClosed
    mymenu.classList.add("menu2", "menu2sep", "menu2tip");
  }
}

// CARROUSEL

$(document).ready(function () {
  let currentIndex = 0;
  let slides = $(".slide");
  let slideCount = slides.length;

  setInterval(function () {
    slides.eq(currentIndex).animate({ opacity: 0 }, 1000); // Oculta el slide actual
    currentIndex = (currentIndex + 1) % slideCount;
    slides.eq(currentIndex).animate({ opacity: 1 }, 1000); // Muestra el nuevo slide
  }, 3000); // Cambia cada 3 segundos
});

// CURSOR

var bigBall = document.querySelector(".cursor-ball-big");
var hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (var i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, 0, {
    x: e.clientX - 15,
    y: e.clientY - 15,
  });
}

// Hover an element
function onMouseHover() {
  gsap.to(bigBall, 0.4, {
    scale: 3,
    opacity: 0.5,
  });
}
function onMouseHoverOut() {
  gsap.to(bigBall, 0.4, {
    scale: 1,
    opacity: 1,
  });
}

document
  .getElementById("fontSizeChanger")
  .addEventListener("input", function (e) {
    document.getElementById("textArea").style.fontSize = e.target.value + "px";
  });
$(document).ready(function () {
  $("#textArea")
    .on("input", function () {
      this.style.height = "auto";
    })
    .trigger("input");
});

// Modificar tamaño letra
window.addEventListener("resize", function () {
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var rangeInput = document.getElementById("fontSizeChanger");

  if (width <= 425) {
    rangeInput.min = "10";
    rangeInput.max = "100";
    rangeInput.value = "55";
  } else {
    rangeInput.min = "20";
    rangeInput.max = "80";
    rangeInput.value = "50";
  }
});
