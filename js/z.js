const parent = document.querySelector(".zIndex-wrp");
const divs = document.querySelectorAll(".zIndex");
const num = document.querySelector("#num");

parent.addEventListener("click", setElem);

const elem = {
  div: divs[0]
};

function setElem(e) {
  e.preventDefault();
  elem.div = e.target;
}

function setZ (e) {
    e.preventDefault();
    elem.div.style.zIndex = +num.value;
}

num.addEventListener('change', setZ)