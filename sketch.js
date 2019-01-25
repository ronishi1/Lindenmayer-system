// L-system rules
var axiom = "0";
var sent = axiom;
var n = 8;

// Rule for fractal binary tree
var rules = [];
rules[0] = {
  char:"1",
  sub:"11"
}
rules[1] = {
  char:"0",
  sub:"1[0]0"
}

var index = 0;
var len = 4;

// *****************************************
// Code for generating L system sentence
function setup(){
  createCanvas(1000, 1000);
  background(105);
  angleMode(RADIANS);
  for(var i = 0; i < n; i++){
    sent = Lgen(sent);
  }
  visualizeBinary();
}

function Lgen(sentence){
  var next = "";
  for(var i = 0; i < sentence.length; i++){
    var cur = sentence.charAt(i);
    var inrule = false;;
    for(var j = 0; j < rules.length; j++){
      if(cur == rules[j].char){
        next += rules[j].sub;
        inrule=true;
      }
    }
    if(!inrule){
      next += cur;
    }
  }
  console.log(next);
  return next;
}

// ***********************************************
function visualizeBinary(){
  stroke(255);
  resetMatrix();
  translate(width/2,height-1)
  for(var i = 0; i < sent.length; i++){
    var cur = sent.charAt(i);
    if(cur == "0"){
      line(0,0,0,-len);
    }
    if(cur == "1"){
      line(0,0,0,-len);
      translate(0,-len);
    }
    if(cur == "["){
      push();
      rotate(PI/4);
    }
    if(cur == "]"){
      pop();
      rotate(-PI/4)
    }
  }
}
