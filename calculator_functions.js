var operator = '';
var leftOpp;
var leftRight = false;
function add() {
    leftRight = true;
    document.getElementById('dis').innerHTML = '';
    operator = 'add';
}
function subtract() {
  leftRight = true;
  document.getElementById('dis').innerHTML = '';
  operator = 'sub';
}

function multiply(){
  leftRight = true;
  document.getElementById('dis').innerHTML = '';
  operator = 'mult';
}
function none(){
  leftOpp = 0;
  rightOpp = 0;
  document.getElementById('dis').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
}
function divide(){
  leftRight = true;
  document.getElementById('dis').innerHTML = '';
  operator = 'div';
}
function equal(){
  leftRight = false;
if(operator === 'add'){
  document.getElementById('answer').innerHTML = parseInt(leftOpp) + parseInt(rightOpp);
}
else if(operator === 'sub'){
  document.getElementById('answer').innerHTML = parseInt(leftOpp) - parseInt(rightOpp);
}
else if(operator === 'mult'){
  document.getElementById('answer').innerHTML = parseInt(leftOpp) * parseInt(rightOpp);
}
else if(operator === 'div'){
  document.getElementById('answer').innerHTML = parseInt(leftOpp) / parseInt(rightOpp);
}
leftOpp = document.getElementById('answer').innerHTML;
document.getElementById('dis').innerHTML = document.getElementById('answer').innerHTML;
}

function operators(input){
    if(leftRight === false){
      document.getElementById('dis').innerHTML += input;
      leftOpp = document.getElementById('dis').innerHTML;
    }
    else{
      document.getElementById('dis').innerHTML += input;
      rightOpp = document.getElementById('dis').innerHTML;
    }
}
