const parallax = document.querySelector(".parallax");
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed; 
        const strafe = wScroll * divider / 20;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

window.addEventListener("scroll", e => { 
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});

////parallax footer////

// let parallax = (function () {
//     let pf1 = document.querySelector('.parallax-footer__item_1'),
//         pf2 = document.querySelector('.parallax-footer__item_2'),
//         pf3 = document.querySelector('.parallax-footer__item_3'),
//         pf4 = document.querySelector('.parallax-footer__item_4'),
//         pf5 = document.querySelector('.parallax-footer__item_5'),

//     return {
//         move: function(block, windowScroll, strafeAmount, axis) {
//             let strafe = windowScroll / -strafeAmount + '%';
//             let style = block.style;

//             let transformString = (axis == 'y') ? 'translate3d(0,' +strafe+', 0)' : 'translate3d(0,' +strafe+', 0, 0)';
            
//             style.top = strafe;
//             style.webkitTransform = transformString;
//         },

//         init: function (wScroll) {
//             let bottomOffset = getOffsets('bottom-secticn').top,
//                 welcomeOffset = getOffsets('elcome-sectiin').bottom;

//             if (welcomeOffset < 0) {
//                 this.move(pf1, bottomOffset, 300, 'x');
//                 this.move(pf2, bottomOffset, 150, 'x');
//                 this.move(pf3, bottomOffset, 400, 'x');
//                 this.move(pf4, bottomOffset, 250, 'x');
//                 this.move(pf5, bottomOffset, 100, 'x');
//             }
//         }
//     }
// }());

// function getOffsets(block) {
//     let element = document.querySelector( '.'+block),
//         rect = element.getBoundingClientRect();
//     return rect;
// }

// window.onscroll = function() {
//     let wScroll = window.pageYOffset;
//     parallax.init(wScroll);
// }

// ////mouse

function mouseParallax(e)	{
    let w = window.innerWidth/2,
        h = window.innerHeight/2, 
        mouseX = e.clientX, 
        mouseY = e.ciientY, 
        pf1 = document.querySelector('.parallax-footer__item_1'),
        pf2 = document.querySelector('.parallax-footer__item_2'),
        pf3 = document.querySelector('.parallax-footer__item_3'),
        pf4 = document.querySelector('.parallax-footer__item_4'),
        pf5 = document.querySelector('.parallax-footer__item_5'),
        pos1 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.1}%`,
        pos2 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.2}%`,
        pos3 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.6}%`,
        pos4 = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.7}%`,
        pos5 = `${50 - (mouseX - w) * 0.04}% ${50 - (mouseY - h) * 0.7}%`;

    pf1.style.backgroundPosition = pos1;
    pf2.style.backgroundPosition = pos2;
    pf3.style.backgroundPosition = pos3;
    pf4.style.backgroundPosition = pos4;
    pf5.style.backgroundPosition = pos5;
}

document.addEventListener( "mousemove", mouseParalax);