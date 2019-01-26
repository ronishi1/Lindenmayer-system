// ******************************
// Fractal binary tree variables/rules
var axiom0 = "0";
var sent0 = axiom0;
var numRecurs = 8;
var len = 3;

var rules = [];
rules[0] = {
  char:"1",
  sub:"11"
}
rules[1] = {
  char:"0",
  sub:"1[0]0"
}
// ******************************

// ******************************
// Fractal plant variable/rules
var axiom1 = "X";
var sent1 = axiom1;
var rules1 = [];
var len1 = 3;
var lenholder = len1;
rules1[0] = {
  char:"X",
  sub:"F+[[X]-X]-F[-FX]+X"
}

rules1[1] = {
  char:"F",
  sub:"FF"
}
// ******************************

// *****************************************
function setup(){
  createCanvas(900, 900);
  reset();
  angleMode(RADIANS);

  // Button for generating binary fractal tree
  var treeButton = createButton("Binary Fractal Tree Gen");
  treeButton.mousePressed(visualizeBinary);

  // Button for generating fractal plant
  var plantButton = createButton("Fractal Plant");
  plantButton.mousePressed(genPlant);

  var resetButton = createButton("Reset");
  resetButton.mousePressed(reset);
}

function reset(){
  sent0 = axiom0;
  sent1 = axiom1;
  len1 = lenholder;
  background(105);
}
// *****************************************

// *****************************************
// Code for binary fractal tree
function Lgen0(sentence){
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

function visualizeBinary(){
  for(var i = 0; i < numRecurs; i++){
    sent0 = Lgen0(sent0);
  }
  stroke(255);
  resetMatrix();
  translate(width/2,height-1)
  for(var i = 0; i < sent0.length; i++){
    var cur = sent0.charAt(i);
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
// *****************************************
function genPlant(){
  sent1 = Lgen1(sent1);
  len1 *= .95
  visualizePlant();
}

function Lgen1(sentence){
  var next = "";
  for(var i = 0; i < sentence.length; i++){
    var cur = sentence.charAt(i);
    var inrule = false;;
    for(var j = 0; j < rules1.length; j++){
      if(cur == rules1[j].char){
        next += rules1[j].sub;
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

function visualizePlant(){
  stroke(255);
  resetMatrix();
  translate(width/2,height-1)
  for(var i = 0; i < sent1.length; i++){
    var cur = sent1.charAt(i);
    if(cur == "F"){
      line(0,0,0,-len1);
      translate(0,-len1);
    }
    else if(cur == "+"){
      rotate(0.436332);
    }
    else if(cur == "-"){
      rotate(-0.436332);
    }
    else if(cur == "["){
      push();
    }
    else if(cur == "]"){
      pop();
    }
  }
}
// *****************************************
