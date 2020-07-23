/**function setup() {
 createCanvas(800,800);
 background(0);
 noFill();
 }

function draw() {
  // put drawing code here
}
function mouseClicked (){
 ellipse(mouseX, mouseY,100,100);
  strokeWeight(10);
  stroke (0,255,0);
}
function keyPressed(){
  stroke(0,0,255);
}

function setup() {
  createCanvas(800,800);
  background(0);
  noFill();
  }
  function draw() {
    // put drawing code here
    ellipse(mouseX, mouseY,100,100);
  strokeWeight(10);
  stroke (0,255,0);
  }

function setup() {
  createCanvas(800,800);
  background(0);
  noFill();
}
function draw() {
  // put drawing code here
ellipse(mouseX, mouseY,100,100);
strokeWeight(2);
stroke (0,255,0);
background (0,10);
}

function setup() {
  createCanvas(800,800);
  background(0);
  noFill();
  stroke (255,0,0);
  
}
function draw() {
  background(0);
  if (mouseY<400){
  ellipse(400,400,100,100);
  } else {
    rect(350,350,100,100);
  }
}

function setup() {
  createCanvas(800,800);
  background(0);
  noFill();
  stroke (255,0,0);
}
function draw() {
  background(0);
  if (mouseY<400){
    ellipse(400,400,mouseX,mouseX);
    } else {
      rect(400-mouseX/2,400-mouseX/2,mouseX,mouseX);
    }
}

function setup() {
  createCanvas(800,800);
  background(0);
 
  stroke (255,0,0);
}
let color = 0;
function draw() {
  fill(0,color,0);
  background(0);
  if(color==255){
    color=0;
  }
  if (mouseY<400){
    ellipse(400,400,mouseX,mouseX);
  } else {
    rect(400-mouseX/2,400-mouseX/2,mouseX,mouseX);
    }
    color = color+0.5;
}

function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
}
let r=0;
let g=255;
let b=0;
let o=0;
function draw() {
  fill(r,g,b,o);
  background(0);
  if(o==255){
    o=0;
  }
  if (mouseY<400){
  ellipse(400,400,mouseX,mouseX);
  } else {
  rect(400-mouseX/2,400-mouseX/2,mouseX,mouseX);
  };
  o++;
}

function mouseClicked(){
  if(g>0){
    r=255;
    g=0;
    b=0;
  }
  else if(r>0){
    r=0;
    g=0;
    b=255;
  }
  else{
    r=0;
    g=255;
    b=0;
  }
}

function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
  noFill();
  ellipse(400,400,50,50);
  ellipse(400,400,50,100);
  ellipse(400,400,100,50);
  ellipse(400,400,100,100);
}

function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
  noFill();
}
 function dessineCercle(X,Y){
  ellipse(X,Y,50,50);
  ellipse(X,Y,50,100);
  ellipse(X,Y,100,50);
  ellipse(X,Y,100,100);
 }
 function draw(){
  background(0);
  dessineCercle(400,350);
  dessineCercle(600,100);
  dessineCercle(200,100);
  dessineCercle(200,600);
  dessineCercle(600,600);
  dessineCercle(mouseX,mouseY);
 }
 
function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
  noFill();
  
}

function dessineCercle(X,Y,Z=1){
  ellipse(X,Y,50*Z,50*Z);
  ellipse(X,Y,50*Z,100*Z);
  ellipse(X,Y,100*Z,50*Z);
  ellipse(X,Y,100*Z,100*Z);
 }
 function draw(){
   background(0);
  dessineCercle(400,350,2);
  dessineCercle(600,100,1);
  dessineCercle(200,100,1);
  dessineCercle(600,600,1);
  dessineCercle(200,600,1);
  dessineCercle(mouseX,mouseY,0.5);
 }
 
function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
  noFill();
  strokeWeight(5);
}
function draw(){
  for (let i=0; i<100;i++){
  let x = random(800);
  let y = random(800);
    point(x,y);
    }
  }
  
 function setup() {
  createCanvas(800,800);
  background(0);
  stroke (255,0,0);
  noFill();
  strokeWeight(5);
}
function draw(){
  for (let i=0; i<100;i++){
  let x = random(800);
  let y = random(800);
  let r = random (255);
  let g = random (255);
  let b = random (255);
  stroke(r,g,b);
    point(x,y);
    }
  }
 
 function setup() {
  createCanvas(800,800);
  background(0);
   noFill();
  strokeWeight(5);
}
function draw(){
  for (let i=0; i<100;i++){
    let x = random(800);
    let y = random(800);
    let r = x/3;
    let b = 800-x/3;
    stroke(r,0,b);
      point(x,y);
      }
}

function setup() {
  createCanvas(800,800);
  background(0);
   noFill();
  strokeWeight(5);
}
function draw(){
  for (let i=0; i<100;i++){
    let x = random(800);
    let y = random(800);
    let r = x/3;
    let b = y/3;
    stroke(r,0,b);
      point(x,y);
      }
}

function setup() {
  createCanvas(800,800);
  background(0,0,255);
  noFill();
  stroke(255,0,0);
  strokeWeight(50);
}
let x=0;
function draw(){
  background(0,0,255)
  point(x,400);
  x=(x+5)%800;
}

function setup() {
  createCanvas(800,600);
  background(0,0,255);
  noFill();
  stroke(255,0,0);
  strokeWeight(50);
}
let x=0;
let y=0;
function draw(){
  background(0,0,255)
  x=(x+5)%800;
  y=(y+5)%600;
  point(x,y);
}

function setup() {
  createCanvas(800,600);
  background(0,0,255);
  noFill();
  stroke(255,0,0);
  strokeWeight(50);
}
let x=0;
let p=5;
function draw(){
  background(0,0,255)
  x=(x+p); 
  point(x,300);
  if (x>800 || x<=0){// ||===> ou 
    p=-p;
  }
}

function setup() {
  createCanvas(800,600);
  background(0,0,255);
  noFill();
  stroke(255,0,0);
  strokeWeight(50);
}
let x=0;
let y=0;
let p=5;
let p1=5;
function draw(){
  background(0,0,255)
  x+=p; 
  y+=p1;
  point(x,y);
  if (x>=800 || x<=0){// ||===> ou 
    p=-p;
  }
  if (y>=600 || y<=0){
    p1=-p1;
  }
}

function setup() {
  createCanvas(800,600);
  background(0,0,255);
  noFill();
  stroke(255,0,0);
  strokeWeight(50);
}
let x=0;
let y=0;
let p=30;
let p1=30;
function draw(){
  background(0,0,255)
  x+=p; 
  y+=p1;
  point(x,y);
  if (x>=800 || x<=0){// ||===> ou 
    p=-p;
  }
  if (y>=600 || y<=0){
    p1=-p1;
  }
  p*=0.9899;
  p1*=0.9899;
}
function mouseClicked(){
  p*=5;
  p1*=5;
}
ligne carré
function setup() {
  createCanvas(800,600);
  background(255,255,255);
  fill(0);
  stroke(0,0,0);
  strokeWeight(2);
}
function faireUnCarré(x,y){
  rect(x,y,33,33);
}
function draw(){
  let w=200;
  let z=100;
  for(let i=0; i<=10;i++){
    faireUnCarré(w,z);
    w+=40;
  }
}
grille carré
function setup() {
  createCanvas(800,600);
  background(255,255,255);
  fill(0);
  stroke(0,0,0);
  strokeWeight(2);
}
function faireUnCarré(x,y){
  rect(x,y,33,33);
}
let x=200;
let y=100;
function draw(){
 
    
    for(let i=0; i<=10;i++){
      faireUnCarré(x,y);
      x+=40;
  }
 
    y+=40;
    x=200;
    if(y==380){
      y=100;
    }
}
grille carré qui bouge
function setup() {
  createCanvas(800,600);
  background(255,255,255);
  fill(0);
  stroke(0,0,0);
  strokeWeight(2);
  frameRate(5);
}
function faireUnCarré(x,y){
  rect(x,y,33,33);
}
let t=0
function draw(){
  let x=100;
  let y=100;
  background(255);
  for(let i=0;i<7;i++){
    y+=40;
    x=200;
    for(let j=0; j<=10;j++){
      faireUnCarré(x+t,y);
      x+=40;
    } 
  }
  t+=1;
}
correction grille carrés qui bougent
let t=0;
function setup () {
  createCanvas(800,600);
  fill(0);
  frameRate(10);
};

function draw () {
  background(255);
  for(var i = 0 ; i < 7 ; i++) {
    for(var j = 0 ; j < 10 ; j++) {
      let offset = Math.abs((t+j)%50-25);
      let offset2 = Math.abs((t+j)%30-15);//offset2 permet un mouvement en diagonal
      
      rect(100+50*j + offset, 100+50*i+offset2, 40, 40);
    }
  }
  console.log(t,Math.abs(t%50-25));
  t+=1;
};
*/
let t=0;

function setup () {
  createCanvas(800,600);
  fill(0);
};

function draw () {
  background(255);
  for(var i = 0 ; i < 7 ; i++) {
    for(var j = 0 ; j < 10 ; j++) {
      let offset = Math.abs((t+j)%50-25);
      let offset2 = Math.abs((t+j)%60-30);//offset2 permet un mouvement en diagonal
      
      rect(100+50*j + offset, 100+50*i+offset2, 40, 40);
    }
  }
  console.log(t,Math.abs(t%50-25));
  t+=1;
};