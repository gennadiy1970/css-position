const tp = document.getElementById('tp');
const selected = document.querySelector('.selected');
const inputs = document.querySelectorAll('#tp input');
const reset = document.querySelector('#tp button');

tp.addEventListener('change', setPosition, false);
reset.addEventListener('click', resetInputs, false);


function setPosition (e) {
    selected.style[e.target.dataset.position] = e.target.value + 'px';
}

function resetInputs () {
    Array.from(inputs, el => {
        selected.style[el.dataset.position] = 'unset';
    })
}

