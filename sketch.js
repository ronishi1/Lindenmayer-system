// L-system rules
var axiom = "0";
var sent = axiom;
var n = 3;

// Rule for fractal binary tree
var rules = [];
rules[0] = {
  letter:"1",
  sub:"11"
}
rules[1] = {
  letter:"0",
  sub:"1[0]0"
}

// *****************************************
// Code for generating L system sentence
function setup(){
  createCanvas(500, 500);
  x = width / 2;
  y = height - 1;
  background(105);
  for(var i = 0; i < n; i++){
    sent = Lgen(sent);
  }
}

function Lgen(sentence){
  var next = "";
  for(var i = 0; i < sentence.length; i++){
    var cur = sentence.charAt(i);
    for(var j = 0; j < rules.length; j++){
      if(cur == rules[j].letter){
        next += rules[j].sub;
      }
    }
  }
  console.log(next);
  return next;
}

// ***********************************************
