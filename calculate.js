//display input
function insert(val) {
  document.getElementById('result').innerText += val;

  return val;
}

function solve(){
  let x = document.getElementById('result').innerText; 

  let y = eval(x);

  document.getElementById('calculation').innerText = y;

  return y;
}

function clearScreen() {
  document.getElementById('result').innerText = '';
}

function back() {
  let z= document.getElementById('result').innerText;

  return z.trimEnd;
}