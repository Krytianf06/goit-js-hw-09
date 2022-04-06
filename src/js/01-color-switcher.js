function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btmStart = document.querySelector('[data-start]');
const btmStop = document.querySelector('[data-stop]');

let timeId = null;


const clickStart = () => {

    timeId = setInterval(() => {
        const colorBackGround = getRandomHexColor();
        document.body.style.backgroundColor = colorBackGround;
        }, 1000
    );
    btmStart.removeEventListener("click", clickStart);
    btmStop.addEventListener("click", clickStop);
    btmStart.disabled = false;

};

const clickStop = () =>
{
    clearInterval(timeId);
    btmStop.removeEventListener("click", clickStop);
    btmStart.addEventListener("click", clickStart);
    btmStart.disabled = false;

}

btmStart.addEventListener("click", clickStart);
