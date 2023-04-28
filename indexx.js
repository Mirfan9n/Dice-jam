var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6) +1;

var randomDice1="images/dice" + randomNo1 + ".png";
var randomDice2="images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNo1 > randomNo2){
    document.querySelector("h1").innerHTML="1st player n pungi bja di";
}
if(randomNo1 < randomNo2){
    document.querySelector("h1").innerHTML="2nd player n pungi bja di";
}
if(randomNo1 === randomNo2){
    document.querySelector("h1").innerHTML="Dobara chl bhai";
}


