const btnwrp = document.querySelector('.btn-wrp');

btnwrp.addEventListener('click', changeClassBtn, false);

function changeClassBtn (ev) {
    ev.target.textContent =  ev.target.textContent === 'static' ? 'relative' : 'static';
    ev.target.parentNode.style.position = ev.target.textContent;
}

const tp = document.getElementById('tp');
const selected = document.querySelector('.selected');
const btnsWidth = document.querySelector('.btns-width');
const inputs = document.querySelectorAll('#tp input');
const reset = document.querySelector('#tp button');

tp.addEventListener('change', setPosition);
reset.addEventListener('click', resetInputs);
btnsWidth.addEventListener('click', setWidth);


function setPosition (e) {
    selected.style[e.target.dataset.position] = e.target.value + 'px';
}

function resetInputs () {
    Array.from(inputs, el => {
        selected.style[el.dataset.position] = 'unset';
    })
}

function setWidth (e) {
    
    if (e.target.nodeName.toLowerCase() === 'button') {
        console.log(e.target.dataset.width);
        selected.style.width = e.target.dataset.width;
    }
}