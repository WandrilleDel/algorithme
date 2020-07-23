
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
*/
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

