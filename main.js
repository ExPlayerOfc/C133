
img = "";
objects = [];
 status = "";
 
function preload(){
  img = loadImage('sala.jpeg');
}
 
 
function setup() {
  canvas = createCanvas(635, 360);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
 
function modelLoaded() {
  console.log("Modelo Carregado!")
  status = true;
  objectDetector.detect(img, gotResult);
}
 
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
objects = results;
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("gray");
  text("Estante", 30, 60);
  noFill();
  stroke("white");
  rect(30, 60, 160, 230,);

  fill("black");
  text("Janela", 400, 100);
  noFill();
  stroke("white");
  rect(400, 100, 270, 130 );

  fill("black");
  text("TV", 200, 160);
  noFill();
  stroke("white");
  rect(200, 160, 160, 100);
}