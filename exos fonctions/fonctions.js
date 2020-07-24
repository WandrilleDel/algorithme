
//1) Écrire une fonction qui prend en entrée un nombre et qui renvoie ce nombre + 4.
/*function plusQuatre(x){
  return x+4
}
console.log(plusQuatre(4));

//2) Écrire une fonction qui prend en entrée un nombre et qui affiche ce nombre + 4 dans la console.
function plusQuatre(x){
    console.log(x+4);
  }
  plusQuatre(4);
 
//3) Écrire une fonction qui ne prend rien en entrée et qui affiche "Bonjour" dans la console.
function bonjour(){
    console.log('bonjour');
}
bonjour();

//4) Écrire une fonction qui ne prend rien en entrée et qui retourne la chaîne de caractères "Bonjour"
function bonjour(){
    return 'bonjour';
}
console.log(bonjour());

//5) Écrire une fonction qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function plusGrand(x,y){
    if(x<y){
        return y;
    }else{
        return x;
    }
}
console.log(plusGrand(2,5));

//6) Écrire une fonction qui prend trois nombres en entrée et qui retourne le plus grand des 3.
function plusGrand(x,y,z){
    if(x<y && y>z){
        return y;
    }else if(y<x && x>z){
        return x;
    }else{
        return z;
    }
}
console.log(plusGrand(13,16,2));

//7) Écrire une fonction qui prend en entrée un nom et un nombre, et qui affiche "Bonjour [nom] !" ce nombre de fois là.
var nom = ['pierre','paul','jacques'];
function ecrireXFois(x,y){
    for(let i=0;i<x;i++){
        console.log(y);
    }
}
ecrireXFois(10,"Bonjour " + nom[2] + "!");

//8) suite fibonacci

//fibonacci en mode itération
function fibonacci(n){
   let n1 =0;
   let n2=1;
 for(let i=0;i<n-1;i++){
     let save = n1;
     n1=n2;
     n2=save+n1;
     console.log(n2);
 }
 return n2;
} 
    

fibonacci(120);

//fibonacci en mode récursif
function fibonacci(x){
    if (x==0){
            return 0;
    }
    if(x==1){
            return 1;
    }
    else{
            return fibonacci(x-1)+fibonacci(x-2);

    }

}

console.log(fibonacci(12));

//Exercies tableau!!!:
// Création du tableau
let tab = [10,11,12];

// Accéder à une case du tableau tab :
// tab[1]
console.log("Case numéro 1 de tab : "+tab[1]);
tab[1] = 77;
console.log("Double de la case numéro 1 de tab : "+(2*tab[1]));

// Ajouter un élément à la fin du tableau tab :
tab.push(100); // Maintenant, le tableau contient 4 variables (10,77,12,100)
// Mon tableau est égal à [10,77,12,100]

console.log("Taille du tableau : "+tab.length);
tab.pop();
console.log("Nouvelle taille du tableau : "+tab.length);
let x = tab.pop();
console.log("(Re)nouvelle taille du tableau : "+tab.length);
console.log("Variable x : "+x);

// Créer un tableau t1 qui contient 6 valeurs : 80, 105, 101, 114, 114 et 101.
let t1 = [80,105,101,114,114,101];
// Créer un tableau t2 qui contient les valeurs 66, 111, 110, 106, 111, 117 et 114.
let t2 = [66, 111, 110, 106, 111, 117, 114];
// Ajouter l'élément 32 au tableau t2.
t2.push(32);
// Tester si la case numéro 3 du tableau t1 est plus grande que 100.
if (t1[3]>100){
    console.log(t1[3]);
}
// Afficher dans la console la taille du tableau t2.
let b = t2.length;
console.log(b);
// Afficher dans la console le dernier élément de t2.
console.log(t2.pop());
// Ajouter un par un tous les éléments de t1 au tableau t2.

for (let x=0;x<=5;x++){
    t2.push(t1[x]);
    }
console.log(t2);
 correction prof:
 // Créer un tableau t1 qui contient 6 valeurs : 80, 105, 101, 114, 114 et 101.
let t1 = [80, 105, 101, 114, 114, 101];

// Créer un tableau t2 qui contient les valeurs 66, 111, 110, 106, 111, 117 et 114.
let t2 = [66, 110, 110, 106, 111, 117, 114];

// Ajouter l'élément 32 au tableau t2.
t2.push(32);

// Tester si la case numéro 3 du tableau t1 est plus grande que 100.
if(t1[3] > 100) {
    console.log("Plus grand");
}else {
    console.log("Plus petit");
}

// Afficher dans la console la taille du tableau t2.
console.log(     t2.length     );

// Afficher dans la console le dernier élément de t2.
// Afficher dans la console la case numéro t2.length-1 du tableau t2
console.log(    t2[ t2.length-1 ]    );

// Ajouter un par un tous les éléments de t1 au tableau t2.
for(let i = 0 ; i < t1.length ; i++) {
    t1[i] = t1[i] + 5;
}


function f1(a,b) {
    return a+b+5;
}

function f2(a,b) {
    return 3*a;
}

function f3(a,b,c) {
    return 3*a + 2*b + 3*c;
}

console.log(f1(2,5)); //12
console.log(f2(7,14));//21
console.log(f3(3,4,5));//32
console.log(f1(f2(7,8),5));//31
console.log(f1(5,f2(7,8)));//31
console.log(f3(f1(1,1),f1(2,2),f1(3,3)));//72

//Fonction qui reçoit un tableau en entrée, et qui renvoie la somme de tous les éléments du tableau.
let tab =[1,2,3,4];
let add= 0;
function additionne(tab){
    for(let i=0; i<tab.length;i++){
        add = tab[i] + add;
    }
    return add;
}
console.log(additionne(tab));

//Fonction qui reçoit un tableau en entrée, et qui renvoie le maximum du tableau.
let t=[3,6,9,12,3,48,57,14,88,200];
let max=0;

function plusHaut(t){
    for(let i=0;i<t.length;i++){
        if(t[i]>max){
        max=t[i];
        }
    }
    return max;
}
console.log(plusHaut(t));

//Fonction qui reçoit un tableau et un nombre en entrée, et qui renvoie le numéro de la case dans laquelle est cet élément (-1 s'il n'est pas dans le tableau).
let t=[25,35,42,53];
let x=0;
result = -1;
function numCase(t,x){
    for(let i=0;i<t.length;i++){
       if(x==t[i]){
        result=i;
       
       }
      
    }
    return result; 
}
console.log(numCase(t,35));


   
//Fonction qui reçoit un tableau et un nombre en entrée, et qui renvoie combien de fois ce nombre apparaît dans le tableau.

let t=[25,25,42,42,42,58,58,58,58];
let x=0;
let result=0;
function numFois(t,x){
    for(let i=0;i<t.length;i++){
       if(x==t[i]){
        result++;  
       }
    }
    return result;
}
console.log(numFois(t,58));

//Fonction qui reçoit un tableau en entrée, et qui renvoie un tableau contenant les mêmes éléments mais dans l'ordre inverse.
let t=[1,2,3,4,5,6];
let t1=[];
function verlan(t){
    for(let i=t.length-1;i>=0;i--){
        t1.push(t[i]);
    }
    return t1;
}
console.log(verlan(t));
*/
//Fonction qui reçoit un tableau et un nombre en entrée, et qui répond si le nombre est dans le tableau ou pas (deux versions : une en utilisant une fonction créée précédemment, et une autre sans).
let t=[3,6,9,12,15];
let n=0;
reponse=n+ " n'est pas dans le tableau";

function present(t,n){
    for(let i=0;i<t.length;i++){    
    if (n==t[i]){
        reponse=n+ " se trouve dans le tableau";
        }
    }   
    return reponse;
}

console.log(present(t,0));
//Fonction qui reçoit un tableau en entrée, et qui renvoie vrai si le tableau est trié (premier élément plus petit que le deuxième, lui-même plus petit que le troisième, etc), faux sinon.


//Fonction qui reçoit un tableau **->->trié<-<-** et un nombre, et qui renvoie vrai si le nombre est dans le tableau, faux sinon.