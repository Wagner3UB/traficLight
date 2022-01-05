const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;
let i = 0;

const traficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
}
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; 

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[ colorIndex ];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () => clearInterval(intervalId);

const turnOn = {
  "red":        () => img.src = "./img/red.png",
  "yellow":     () => img.src = "./img/yellow.png",
  "green":      () => img.src = "./img/green.png",
  "automatic":  () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener("click", traficLight);

const changeButton = () => {
  const colors = [
    "linear-gradient(45deg, rgba(179,9,9,1) 0%, rgba(176,179,9,1) 50%, rgba(17,110,22,1) 100%)",
    "linear-gradient(45deg, rgba(17,110,22,1) 0%, rgba(179,9,9,1) 50%, rgba(176,179,9,1) 100%)",
    "linear-gradient(45deg, rgba(176,179,9,1) 0%, rgba(17,110,22,1) 50%, rgba(179,9,9,1) 100%)"
  ]
  if(i < 3){
    document.querySelector(".button:nth-of-type(4)").style.background = `${colors[i]}`;
    i++;
  } else {
    i = 0;
  }
}

setInterval(changeButton, 500);
