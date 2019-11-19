document.body.onload = setMobile(), setPage();
window.addEventListener("resize", setMobile);

var nav1 = document.getElementById("nav1");
nav1.innerHTML = "TEXT TERST";
function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function setPage() {
  var n1 = document.createElement("span");
  n1.id = "nav1";
  n1.style.position = "absolute";
  n1.style.width = "20%";
  n1.style.height = "20%";
  n1.style.backgroundColor = "green";
  document.body.appendChild(n1);
}
