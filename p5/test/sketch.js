function setup() {
  // put setup code here
  createCanvas(1000,1000);/**taille de la zone de dessin */
  background(0);/**couleur du canvas */
  stroke(255,255,0);/**couleur du "crayon" en rgb */
  strokeWeight(5);/**taille de la mine du crayon */
  point(500,500);/**faire un point (coordonnées x, y) */
  stroke(0,255,0);
  strokeWeight(10);
  point(800,500);
  stroke(255,0,0);
  strokeWeight(10);
  point(300,360);
  line(100,350,100,1000);/**dessiner ligne (point de départ (deux coordonnees), point d'arrivée (indem)) */
  noFill();
  //fill(0);/**ne pas remplir l'ellipse (on peux utiliser "noFill()" pour ne pas remplir les formes) */
  ellipse(300,300,50,200);/**créer une ellipse (coordonnées de départ (x,y), et largeur, heuteur) */
  //rect(100,550,300,400);/**dessiner un rectangle */
 }

function draw() {
  // put drawing code here
point(100,500);
point(100,600);
point(100,700);
point(100,800);
point(100,900);
point(100,1000);
}
