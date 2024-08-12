# projeto de tres bolas que atravessam a tela e pinta
 let cor;
 let vertical;
 let horizontal;
function setup() {
  createCanvas(400,400);
  background("rgb(8,255,213)");
cor=color(random(0,255),random(0,255),random(0,255));
circuloX = [random(height),random(height),random(height)];
 circuloY = [0,0,0];
}

function draw() {
  fill(cor);
 for (let quantos in circuloX){
  circle(circuloX[quantos],circuloY[quantos],100);
  circuloX[quantos]+= random(0,3);
  circuloY[quantos]+= random(-3,3);

   if (circuloX[quantos] >= width) {
   circuloX[quantos] = 0;
   circuloY[quantos] = random(height);
   }
 }
   if (mouseIsPressed){ cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
 }
}
