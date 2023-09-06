let playBtn = document.getElementById("play-btn");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let btnNumberArray = document.getElementsByClassName("num-btn");
let msg = document.querySelector(".btn-win p");
let diceFaces = [
  "./dice-six-faces-one.png",
  "./dice-six-faces-two.png",
  "./dice-six-faces-three.png",
  "./dice-six-faces-four.png",
  "./dice-six-faces-five.png",
  "./dice-six-faces-six.png",
];
let dice = document.getElementById("dice-imgs");
let totalScore = document.querySelector(".total-score p");
let numberValue = null;
let btnNumber = null;

playBtn.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "block";
};

for (let i = 0; i < btnNumberArray.length; i++) {
  btnNumberArray[i].onclick = () => {
    numberValue = Number(btnNumberArray[i].value);
    btnNumberArray[i].style.backgroundColor = "black";
    btnNumberArray[i].style.color = "white";

    msg.innerHTML = " ";
    msg.style.backgroundColor = "transparent";

    for(let j=0;j<btnNumberArray.length;j++)
    {
      if(i != j) 
      {
        btnNumberArray[j].style.backgroundColor = "transparent";
        btnNumberArray[j].style.color = "black";
      }
    }
    
    btnNumber = i;
  };
}

function fooRandom() {
  let r = Math.floor(Math.random() * (6 - 0)) + 0; //random number in range(0,6)
  if (numberValue == null) {
    msg.innerHTML = "Error msg: first choose some number";
    msg.style.backgroundColor = "red";
    return;
  }
  dice.style = `background-image: url(${diceFaces[r]})`;

  // msg.innerHTML = ' ';
  // msg.style.backgroundColor="transparent";

  if (numberValue == r + 1) {
    let temp = totalScore.innerText;
    totalScore.innerText = Number(temp) + 20;
  } else {
    let temp = totalScore.innerText;
    totalScore.innerText = Number(temp) - 5;
  }

  btnNumberArray[btnNumber].style.backgroundColor = "transparent";
  btnNumberArray[btnNumber].style.color = "black";

  btnNumber = null;
  numberValue = null;
}
