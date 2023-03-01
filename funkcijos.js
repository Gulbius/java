function sayHi() {
console.log("labs"); // nieko nepriima ir nieko negrazina tik ispausdina labas ! ! !
}
sayHi();
// -------------------------------------------------------
function simplified() {
    return 3.14; // nieko nepriima, bet grazina 3.14 nes nurodyta return

}
console.log(simplified()); /// grazina cia
// ---------------------------------------------------------------
let skc = 12;
function numSQ(num) {
    return num * num // priima viena kintamaji ir grazina rezultata
} 
console.log(numSQ(10));
console.log(numSQ(skc));
//-----------------------------------------------------------------------------------



function pasisveikinimas(parosLaikas, vardas) { // funkcija kur priima daugiau nei viena kintamaji
    if (parosLaikas == "rytas") {
        console.log("labas rytas" + vardas.toUpperCase());/// <--- spausdinimas konsoleje nera grazinimas
    }
    if (parosLaikas == "vakras") {
        console.log("labanaktis" + vardas.toUpperCase()); /// <--- spausdinimas konsoleje nera grazinimas
    }  
}
pasisveikinimas("rytas", "Mindaugas");
pasisveikinimas("vakras", "Saulius");

console.log("1-a Uzduotis --------------------------------------------------------------------");
// Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.
function daug(skc1,skc2) {
    console.log(skc1 * skc2); 
}
daug(3,4)

console.log("2-a Uzduotis --------------------------------------------------------------------");
function vardas(name) {
    console.log("labas" + " "+  name);
}
vardas("Mantas")
console.log("3-ia Uzduotis --------------------------------------------------------------------");
function tekstas(zodis) {
    console.log(zodis.length);
}
tekstas("Kamikadze")
console.log("4-a Uzduotis --------------------------------------------------------------------");
function inic(vardas,pavarde) {
    console.log((vardas.toUpperCase().charAt(0)) + (pavarde.toUpperCase().charAt(0))) ;
}
inic("mantas","gulbickas");

console.log("5-a Uzduotis --------------------------------------------------------------------");
// Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.
function tinklas(skaicius) {
        
document.getElementById("numberPlace").innerHTML += skaicius;
    
    
}
tinklas(777);

console.log("7-a Uzduotis --------------------------------------------");
// Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.
function randomas() {
    let eilute = "";
    for (let i = 0; i < 3; i++) {
         eilute += Math.round(Math.random() * 5) + ",";
     
    }
    console.log(eilute.substring(0, eilute.length - 1));
   
}
randomas();// kodel istrynus ji nespausdina?

console.log("8-a Uzduotis ----------------------------------------------------------");

// Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.
// dviguba(1,10)
function dviguba(nuo,iki) {
return nuo + (Math.round(Math.random() * (iki - nuo)));
    
}
console.log(dviguba(1,10))

console.log("9-a Uzduotis --------------------------------------------------------------------");
// Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.
function desimt() {
    for (let i = 1; i < 11; i++) {
        document.getElementById("sequence").innerHTML += "<p>" + i + "</p>"; /// innerhtml += priskiriame reiksme tam "sequence"
        
    }
}
 desimt()   
 console.log("1-a VIDUTINE Uzduotis --------------------------------------------------------------------");
 // Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį) NENAUDOTI jau esamų js funkcijų! Nenaudoti ** operatoriaus! Naudoti for, if, kintamuosius.
 function kvadratu(skc,lpsn) {
    let ats = 1;
     for (let i = 0; i < lpsn; i++) {
        // console.log(ats);
         ats = ats * skc; 
        
     
     }
     return ats
 }
 console.log(kvadratu(2,2)) 
 
 console.log("2-a VIDUTINE Uzduotis --------------------------------------------------------------------");
 //  Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id. Ši funkcija naudos pirmają funkciją ir jos rezultatą gražins į HTML elementą.
 function trio(skc,lpsn,double) {

    document.getElementById("double").innerHTML = " laipsnis yra -->" + kvadratu(skc,lpsn);
 }
 trio(2,3, "double");

console.log("1-a SUNKI Uzduotis --------------------------------------------------------------------");
//  Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;
function tagas(news) {
    document.getElementById("tags").innerHTML = "<h1>" + news + "</h1>";
    
}
tagas("test test test")

console.log("2-a SUNKI Uzduotis --------------------------------------------------------------------");
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją
function ako(news,nmbr) {
    
    for (let i = 0; i < 3; i++) {
        document.getElementById("tags").innerHTML = "<h"+nmbr +">" + news + "</h"+ nmbr +">" ; /// kodel neatvaizduoja kelis kartus ciklas?
        
    }
  
}
ako("SVEIKI SVEIKI",3)
console.log("3-a SUNKI Uzduotis --------------------------------------------------------------------");
// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio);
// function grs() {
//     var string = "";
//     var zenklai= "abcdefghijklmnopqrstuvwxyz0123456789";
   
//     for (let i = 0; i < 20; i++) {
//         string += zenklai.charAt(Math.round(Math.random() * zenklai.length))
//     }
//     console.log(string);
    
//     document.getElementById("tikskc").innerHTML +=   "<h1>" + string + "</h1>"; /// innerhtml +=  
//   }
//   grs()
  console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(25));
//////////////////////////////////////////////////////////////////////////////////////////////////////
  // Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio);
function rndStr(str) {
    console.log(str);
    let numz = "";
    let htm = "";
    for (let i = 0; i < str.length; i++) {
       if (str[i]*0==0) { // jei skaicius
        // console.log(str[i] + "taip");
        numz += str[i];
       }else{ // jei raide
        if(numz !== ""){
            console.log("<h1>" + numz + "</h1>");
            htm += "<h1>" + numz + "</h1>";
            numz = ""; /// resetinu eilute vel nuo nuliu
        }
        console.log("<p>" +str[i] + "</p>" );
        htm += "<p>" +str[i] + "</p>" ;
       }
    
    }
    if (numz != "") { // tikrinam ar paskutine interacija yra skaicius
        console.log("<h1>" + numz + "</h1>");
        htm += "<h1>" + numz + "</h1>";
    }
    console.log(htm);
    document.getElementById("tikskc").innerHTML = htm;
}
rndStr(makeid(5))// paduodu virsutine funkcija i sita nauja funkcija
console.log("-------------------------------------------------------------------");
// Yra „3 už 2“ (arba „2+1“, jei norite) pasiūlymas mangams. Tam tikram kiekiui ir kainai (už mangą) apskaičiuokite bendrą mangų kainą.
// mango(2, 3) ==> 6    # 2 mangai --== $3 per vnt $6; no mango --== free
// mango(3, 3) ==> 6    # 2 mangoes --== $3 per vnt $6; +1 mango --== free
// mango(5, 3) ==> 12   # 4 mangoes --== $3 per vnt $12; +1 mango --== free
// mango(9, 5) ==> 30   # 6 mangoes --== $5 per vnt $30; +3 mangoes --== free
function mango(quantity, price){
    let ats= (quantity - Math.floor(quantity / 3)) * price;
    return ats

  }
 console.log(mango(9,3)); 
 
  console.log("/---------------------/-----------77777------/---------/-----------------");
  let res = alphabetPosition("The sunset sets at twelve o' clock.");
  console.log(res);
  function alphabetPosition(text) {

        let result = "";
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (i = 0; i < text.length; i++){        
            let pos = letters.indexOf(text[i]);
            if(pos == -1){ // jei -1 reiskia simbolis ar tarpas ir continue leidzia eiti prie kito simbolio
                continue;
            }
            if(pos >= letters.length / 2){ // jeigu pos pozicija didesne arba lygi pirmai pusei pusei todel atimu puse raidziu 
                pos -= letters.length / 2;// Didziosios ir mazosios kaip atskiri dalykai todel reik kad skaiciuotu didziasias nuo 1 ir mazas nuo 1
            }
            result += pos + 1 + " "; // kad skaiciuotu ne nuo 0 o nuo vieneteo pridedam 1 nes buvo A=0;
  }
        return result.trim();
 
      }