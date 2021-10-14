let simplebtn = document.querySelectorAll("a")[0];
let hexbtn = document.querySelectorAll("a")[1];


function defaultcall() {
  const colors = [
    "green",
    "blue",
    "red",
    "orange",
    "violet",
    "purple",
    "black",
    "rgba(255, 68, 68, 0.589)",
    "rgba(68, 25, 130, 0.589)",
  ];
  const btn = window.document.querySelector(".btn");
  const color = window.document.querySelector(".color");
  btn.addEventListener("click", function () {
    let number = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[number];
    color.innerHTML = colors[number];
    color.style.color = colors[number];
  });
}


defaultcall();


simplebtn.addEventListener("click", function () {
  simplebtn.className = "present";
  hexbtn.removeAttribute("class");
  defaultcall();
});


hexbtn.addEventListener("click", function () {
  hexbtn.className = "present";
  simplebtn.removeAttribute("class");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btn = window.document.querySelector(".btn");
  const color = window.document.querySelector(".color");
  btn.addEventListener("click", function () {
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors = colors + hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = colors;
    color.innerHTML = colors;
    color.style.color = colors;
  });
});
