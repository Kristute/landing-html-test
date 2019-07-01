const leftArrowElement = document.getElementsByClassName("blog__arrow--left")[0];
const rightArrowElement = document.getElementsByClassName("blog__arrow--right")[0];
const blogListElement = document.getElementsByClassName("blog__list")[0];

let animationLoop = null;
const postWidth = 348;
const startingPosition = 217;
let listPosition = startingPosition;
blogListElement.style.transform = `translate(217px,0)`;


function slideRight() {
    if (blogListElement.clientWidth > listPosition + 348) {
        listPosition += 2; 
        blogListElement.style.transform = `translate(${listPosition}px,0)`;
    }
}

function slideLeft() {
    if (blogListElement.clientWidth > listPosition * -1 + 348) {
        listPosition -= 2; 
        blogListElement.style.transform = `translate(${listPosition}px,0)`;     
    }
}

leftArrowElement.addEventListener(
    'mousedown',
    () => {
        if (animationLoop === null) {
            animationLoop = setInterval(
                slideRight,
                10,
            );
        }
    },
);

leftArrowElement.addEventListener(
    'mouseup',
    () => {
        clearInterval(animationLoop);
        animationLoop = null;
    },
);


rightArrowElement.addEventListener(
    'mousedown',
    () => {
        if (animationLoop === null) {
            animationLoop = setInterval(
                slideLeft,
                10,
            );
        }
    },
);

rightArrowElement.addEventListener(
    'mouseup',
    () => {
        clearInterval(animationLoop);
        animationLoop = null;
    },
);
