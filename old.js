console.log("=========================== 1. Vardai pavardes =================================") 
// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let vardas = "Mantas";
console.log(vardas);
let pavarde = "Gulbickas";
console.log(pavarde);
let gimimo = 1994;
console.log(gimimo);
let metai = 2023;
console.log(metai);
let result = (metai - gimimo)
console.log ( " As Esu " + ( vardas )+ ""   +  ( pavarde )+ ""  + ( " man yra " + result + " metai ")) ;

console.log("=========================== 2. DALYBA DVIEJU RANDOM ================================")
// Naudokite funkcija Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let rnd = Math.round(Math.random() * 4);

let rnds = Math.round(Math.random() * 4);
///jeigu rnd = 0 ir rnds nera lygus nuliui, tda vykdom koda esanti zemiau
if (rnds !=0 && rnds !=0 ) {
    

if (rnd>rnds, rnd !=0 , rnds !=0) { 
    console.log (Math.round((rnd/rnds)* 100) / 100);
}else{
    console.log (Math.round((rnds/rnd)* 100) / 100);
        }
    }else{
        console.log("dalyba is nulio negalima");
    }
console.log("======================== 3. IS TRIJU VIDURINIS====================================");
// Naudokite funkcija Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.

let pirmas = (Math.round(Math.random()* 25)); 
console.log(pirmas);
let antras = (Math.round(Math.random()* 25));
console.log(antras);
let trecias = (Math.round(Math.random()* 25)); 
console.log(trecias);

if ((pirmas > antras && pirmas < trecias) || (pirmas < antras && pirmas > trecias)){
    console.log(pirmas); 
}
if ((antras > pirmas && antras < trecias) || (antras < pirmas && antras > trecias)){
    console.log(antras); 
}
if ((trecias > antras && trecias < pirmas) || (trecias < antras && trecias > pirmas)){
    console.log(trecias); 
}

console.log("======================== 4. TRIKAMPIS ====================================");
// Įvedami skaičiai - a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 

let a = 1 + (Math.round(Math.random() * 9)); 
console.log("a", a);
let b = 1 + (Math.round(Math.random() * 9));
console.log("b",b);
let c= 1 + (Math.round(Math.random() * 9)); 
console.log("c",c);   

if (a+b > c && a + c > b && b + c > a) {
    console.log("gaunasi trikampis △");
} else {
    console.log("nesigauna trikampis /|");
}
console.log("========================5. ZERO ONE AND TWO===================================");
// Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).
console.log(a1);
let b2 = (Math.round(Math.random() * 2));
console.log(b2);
let c3= (Math.round(Math.random() * 2)); 
console.log(c3);   
let d4= (Math.round(Math.random() * 2)); 
console.log(d4);   

let count0=0;
let count1=0;
let count2=0;

if (a1==0) {
    count0++;
}
if (b2==0) {
    count0++;
}
if (c3==0) {
    count0++;
}
if (d4==0) {
    count0++;  
}
if (a1==1) {
    count1++;
}
if (b2==1) {
    count1++;
}
if (c3==1) {
    count1++;
}
if (d4==1) {
    count1++;
}
if (a1==2) {
    count2++;
}
if (b2==2) {
    count2++;
}
if (c3==2) {
    count2++;
}
if (d4==2) {
    count2++;
}

console.log("nuliukai",count0,);
console.log("vienetukai", count1);
console.log("dvejetukai", count2);

console.log("======================== 6. MINUSINIS ====================================");
// Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}. 
let min = -10;
let max = 10;
let num1 = min + (Math.round(Math.random() * (max - min))); 
let num2 = min + (Math.round(Math.random() * (max - min))); 
let num3 = min + (Math.round(Math.random() * (max - min)));  
let string1 = 0;
console.log(num1,num2,num3);

if (num1<0) {
    // console.log("[" +num1 + "]");
    string1 += "[" +num1 + "]";
}
if(num1>0){
    // console.log("{" + num1 + "}");
    string1 +=  "[" +num1 + "]"
}
if (num1==0) {
        console.log ("(" + num1 + ")"); 
    }
if (num2<0) {
    console.log("[" +num2 + "]");
}
if(num2>0){
    console.log("{" + num2 + "}" );
}
if (num2==0) {
        console.log("(" + num2 + ")"); 
    }
if (num3<0) {
    console.log("[" +num3 + "]");
}
if (num3>0){
    console.log( "{" + num3 + "}"   );
}
if (num3==0) {  
        console.log( "(" + num3 + ")" ); 
    }
console.log("======================== 7. ZVAKUTES ===================================="); 
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
let min1 = 5;
let max2 = 3000;
let kiek = min1 + (Math.round(Math.random() * (max2 - min1))); 
let zvak = 1;

console.log( "Perkamas žvakių kiekis");
console.log(kiek);
if (kiek<1000) {
    zvak = 1;
    console.log("Galutinė kaina");
    console.log(zvak * kiek + "(€)");
}
if (kiek>1000 && kiek<2000) {
    zvak = 1-0.03;
    let trim = ((Math.round(zvak * kiek * 1000) / 1000));
    console.log("Galutinė kaina su 3% nuolaida");
    console.log(trim + "(€)");
} 
if (kiek>2000) {
    zvak = 1-0.04;
    let kem = ((Math.round (zvak * kiek * 1000) / 1000));
    console.log ("Galutinė kaina su 4% nuolaida");
    console.log (kem + "(€)");   
}
console.log("======================== 8. ARITMETINIS VIDURKIS===================================="); 
// Naudokite funkcija Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.

let first = Math.round(Math.random() * 100);
let second = Math.round(Math.random() * 100);
let third = Math.round(Math.random() * 100);
console.log(first, second, third);
result = (first+second+third)/3;
console.log("Aritmetinis vidurkys yra->"+Math.round(result));
if ((first<10 || first>90) && (second<10 || second>90) && (third<10||third>90)) {
    
    console.log("Visų kintamųjų reikšmės neatitinka sąlygų");   
} else 
if((first<10 || first>90) && (second<10 || second>90)){
    console.log("Vidurkis be 1 ir 2 =" + third);
} else
if ((first<10 || first>90) && (third<10||third>90)) {
    console.log("Vidurkis be 1 ir 3 =" + second);
}else
if ((second<10 || second>90) && (third<10||third>90)) {
    console.log("Vidurkis be 2 ir 3 =" + first);
}else
if (first<10 || first>90) {
    console.log("VIDURKIS BE 1->"+ Math.round(second+third)/2);
    
}else
if (second<10 || second>90) {
    console.log("VIDURKIS BE 2->"+ Math.round(first+third)/2);
}else
if (third<10||third>90) {
    console.log(" VIDURKIS BE 3->"+ Math.round(first+second)/2);
}



















