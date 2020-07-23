/*set_pos(500,500);
change_color(color.red);
set_line_width(5);
forward(200);
face_right();
forward(100);

set_pos(500,500);
change_color(color.yellow);
face_left();
forward(100);
face_down();
forward(100);
face_right();
forward(200);
face_up();
forward(200);

set_pos(500,500);
change_color(color.red);
face_up();
forward(100);
face_down();
forward(200);
face_up();
forward(100);
face_right();
forward(100);
face_left();
forward(200);


set_pos(400,700);
change_color(color.green);
face_right();
forward(200);
arc_left(100,180);
face_left();
forward(100);
arc_right(100,180);
face_right();
forward(200);


set_pos(500,300);
change_color(color.fuchsia);
face_right();
arc_right(200,180);
arc_right(100,180);
arc_left(100,180);
arc_left(200,180);


set_pos(500,500);
change_color(color.blue);
face_up();
forward(100);
up();
forward(100);
down();
forward(200);


set_pos(400,500);
change_color(color.green);
face_down();
forward(200);
arc_left(100,180);
forward(100);
up();
forward(100)
down();
forward(200);
arc_left(100,180);
forward(100);


set_pos(500,400);
change_color(color.fuchsia);
face_up();
forward(100);
right(90);
forward(200);
right(90);
forward(400);
right(90);
forward(100);
up();
forward(100);
right(90);
forward(100);
down();
forward(100);


set_pos(300,700);
change_color(color.blue);
face_right();
arc_left(100,180);
arc_right(100,180);
forward(400);
arc_right(100,180);
arc_left(100,180);
face_left();
forward(400);


set_pos(300,300);
change_color(color.green);
for (let i=0; i<4; i++) {
    face_right();
    forward(100);
    face_down();
    forward(100);
}

set_pos(100,500);
change_color(color.red);
for (let i=0; i<4 ;i++){
    face_up();
    forward(100);
    face_right();
    forward(100);
    face_down();
    forward(100);
    face_right();
    forward(100);
}

set_pos(400,550);
change_color(color.aqua);
face_right();
for (let i=0; i<4 ;i++){
    forward(200);
    left(120);
}

set_pos(400,550);
face_up();
change_color(color.brown)
forward(200);
change_color(color.red);
for (let i=0; i<4 ;i++){
    forward(100);
    right(120);
}

set_pos(400,550);
change_color(color.brown);
for (let i=0; i<2 ;i++){
    face_right();
    forward(100);
    face_up();
    forward(100);
}
change_color(color.green);
for (let i=0; i<3 ;i++){
    face_right();
    forward(100);
    face_down();
    forward(100);
}

set_pos(50,500);
face_right();

for (let i=0; i<4; i++){
    for (let j=0; j<4 ;j++){
        change_color(color.brown);
        forward(100);
        right(90);
    }
    change_color(color.red);
    left(60);
    forward(100);
    right(120);
    forward(100);
    face_right();
    up();
    forward(100);
    down();
}

set_pos(500,700);
face_right();
change_color(color.orange)
for(let i=0; i<8;i++){
    for(let j=0; j<4;j++){
        forward(100);
        right(120);
    }
    left(165);
}

set_pos(500,950);
face_up();
change_color(color.green);
forward(400);
right(45);
for(let i=0; i<4; i++){
    for(let j=0; j<3; j++){
        change_color(color.red);
        forward(200);
        right(120);
    }
change_color(color.yellow);
forward(200);
left(90);
}

set_pos(700,700);
change_color(color.green);
face_right();
for(let i = 0; i<3; i++){
    for(let j=0; j<3;j++){
        forward(100);
        right(120);
        for(let k=0; k<4;k++){
            right(90);
            forward(100);
        }
    }
    left(120);
    forward(400);
}

set_pos(500,400);
face_right();
change_color(color.yellow);
for (let i=0; i<4; i++){
    for(let j=0; j<2; j++){
        arc_left(100,90);
        forward(100);
        left(90);
    }
arc_right(100,45);
}
change_color(color.blue);
left(60);
arc_right(200,300);
right(120);
arc_left(100,180);


set_pos(500,500);
face_right();
change_color(color.yellow);
let longueur = 100;
for (let i =0; i<10; i++){
    forward(longueur)
    right (90);
    longueur = longueur + 50;   
}
d13
set_pos(450,550);
face_right();
change_color(color.fuschia);
let rayon = 100;
for(let i =0; i<8; i++){
    arc_right (rayon,180);
    up ();
    forward(100);
    down ();
    rayon = rayon +50;
}
d16
set_pos(500,400);
face_down();
change_color(color.green);
forward(200);
right (120);
forward(100);
left(120);
right (90);
for(let i=0;i<3;i++){
    forward(100);
    right (90);
}
left (120);
forward(100);
right(120);
left (90);
up ();
forward(100);
down ();
change_color(color.orange);
let rayon = 100;
arc_right (rayon, 180);
for(let i = 0; i<2;i++){
    up ();
    rayon=rayon+50;
    arc_right(rayon,180);
    down ();
    rayon=rayon+50;
    arc_right(rayon,180);
}
e12
set_pos(150,450);
face_right();
shift_color(4/6);
function dessiner_carré(longueur){
    for(let i=0; i<3; i++){
        for(let j=0; j<4;j++){
            forward(longueur);
            arc_left(100,90);
        }
        longueur=longueur+50;
    }
}
dessiner_carré(100);
face_down();
up ();
forward(200);
shift_color(0.18);
down ();
dessiner_carré(100);
face_right();
up ();
forward(500);
shift_color(0.25);
down();
dessiner_carré(100);


img contour
shift_color(0);
let epaisseur = 200
set_pos(500,500);
for(let i=0;i<5;i++){
    set_line_width(epaisseur);
    arc_left(150,360);
    arc_right(150,360);
    epaisseur=epaisseur-45;
    shift_color(0.78);
}
img arc en ciel
shift_color(0);
set_pos(0,500);
set_line_width(1000);
face_right();
for(let i=0;i<1000;i++){
    forward(8);
    shift_color(0.009);
}

set_pos(500,500);
let longueur=10;
for(let i=0;i<38;i++){
    for(let j = 0;j<4;j++){
        forward(longueur);
        left (90);
        
    }
    longueur=longueur+10
    right(10);
}
img spirale
set_pos(500,500);
let longueur = 1;
for(let i=0;i<80;i++){
    arc_left(longueur,180);
    longueur=longueur+2;
}

set_pos(500,500);
shift_color(0)
let longueur=10;
for(let j=0;j<150;j++){
    right(91);
    forward(longueur);
    longueur=longueur+5
    shift_color(0.01)
        
}
*/
set_pos(300,700);
shift_color(0);
