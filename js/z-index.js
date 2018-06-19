const elements = {
    box0: document.querySelector('.box0'),
    box1: document.querySelector('.box1'),
    box2: document.querySelector('.box2'),
    cbox0: document.querySelector('.cbox0'),
    cbox1: document.querySelector('.cbox1'),
    cbox2: document.querySelector('.cbox2'),
    setZ: document.querySelector('.set-z'),
    setZC: document.querySelector('.set-zcontext'),
    setZW2: document.querySelector('.z-wrapper2')
}


elements.setZ.addEventListener('click', addZIndex, false);
elements.setZC.addEventListener('click', addZIndex, false);
elements.setZW2.addEventListener('click', setParams, false);

function addZIndex (ev) {
    const elem = elements[ev.target.dataset.zb];
    elem.textContent = +elem.textContent + +ev.target.dataset.add;
    elem.style.zIndex = elem.textContent;
}

function setParams (ev) {
    if (ev.target.classList.contains('rel')) {
        setRelative(ev);
    }
    if (ev.target.classList.contains('half-opacity')) {
        setOpacity(ev);
    }
}

function setOpacity (ev) {
    const elem = ev.target.parentNode;
    elem.dataset.op = elem.dataset.op === '0.5' ? '1' : '0.5';
    ev.target.textContent = `opaciti: ${elem.dataset.op}`;
    elem.style.opacity = elem.dataset.op;
} 

function setRelative (ev) {
    const elem = ev.target.parentNode;
    ev.target.textContent = ev.target.textContent === 'static' ? 'relative' : 'static';
    elem.style.position = ev.target.textContent;
    
}