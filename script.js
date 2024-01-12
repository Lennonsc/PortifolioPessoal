let header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.style.background = "#191919";
  } else {
    header.style.background = "transparent";
  }
});

// Rainbow Trail
document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");

  container.addEventListener("mousemove", function (e) {
    var trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    container.appendChild(trail);
    trail.style.background = generateRainbowColor();

    setTimeout(function () {
      container.removeChild(trail);
    }, 80);
  });
});
function generateRainbowColor() {
  var hue = Math.floor(Math.random() * 360); // Gera um valor aleatório entre 0 e 360 para o matiz (hue)
  var saturation = "100%"; // Define a saturação como 100%
  var lightness = "50%"; // Define a luminosidade como 50%
  return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
}
