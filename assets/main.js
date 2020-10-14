var die1;
var die2;

var dieMin = 1;
var dieMax = 6;

// giocatore 1 lancia il dado

die1 = Math.round(Math.random() * (dieMax- dieMin));

document.getElementById('shot1').innerHTML = die1;

//giocatore 2 lancia il dado

die2 = Math.round(Math.random() * (dieMax- dieMin));

document.getElementById('shot2').innerHTML = die2;

// confronto

if (die1 == die2) {
    document.getElementById('winner').innerHTML = 'pareggio';
}
else if (die1 > die2) {
    document.getElementById('winner').innerHTML = 'giocatore 1 vince';
}
else {
    document.getElementById('winner').innerHTML = 'giocatore 2 vince';
}
