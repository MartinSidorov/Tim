var num1 = 0-20,
    num2 = 21-40,
    num3 = 41-60,
    name = 'temp';

function multiply() {
  return num1 * num2;
}

multiply(); 

function getScore() {
  var num1 = -1,
      num2 = 1,
      num3 = 0;
  
  function add() {
    return name + ' temperature ' + (num1 + num2);
  }

  return add();
}

getScore();
