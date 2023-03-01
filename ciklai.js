console.log("========================CIKLAI==================================");
// for (let i = 0; i < 10; i++) { // kai zinoma kiek kartu reikalinga atlikti operacija
//     console.log("hello world" + i);  
// }

// while (i<3) { // begalinis ciklas i++ prideda viena1  prie i kad pasiektu gala// kai nezinome kiek kartu operacija bus atliekama
//     console.log("Bybys"+i++);   
// }
console.log("========================PIRMAS==================================");
// Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
for (let i = 0; i < 10; i++) {
    console.log("labas");

}
console.log("========================ANTRAS==================================");
// Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("======================SESTAS==================================");
// .console.log(Atspausdinkite kas antrą skaičių nuo 10 iki 50 (pornius););
for (let i = 10; i < 52; i++) {
    if (i % 2 == 0) {
        console.log("lyginis" + i);
    }
}
console.log("======================SEPTINTAS==================================");
// Atspausdinkite kas antrą skaičių nuo 10 iki 50. (pornius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) {
            continue
        }
        console.log(i)
    }

}
console.log("======================NAUJA TETMA==================================");
let i = 0;
for (; true;) {
    ; i++
    console.log(i);
    if (i >= 20) {
        break;
    }
}
console.log("===================== KAS KETURIS SKAICIUS==================================");
for (let i = 0; i < 25; i += 4) {
    console.log(i);


}
console.log("======================NUO GALO SKAICIUS==================================");
for (let i = 24; i >= 0; i--) {
    console.log(i);
}
console.log("======================MASYVAS JS ARRAY SKAICIUOJAS NUO 0==================================");
let sk = 0;
let draugai = ["saulius", "matas", "Jovita", "Arnas", "birute", "ugne", "linas"]
console.log(draugai);

console.log(draugai[3]);
draugai[0] = "Saulius B";
draugai[2] = "Jovita S";

console.log("labas" + draugai[0]);
console.log("labas" + draugai[2]);
console.log("labas" + draugai[1]);
console.log(draugai.length);
for (let i = 0; i < draugai.length; i++) {
    console.log(draugai[i]);

}
console.log("========================PRIDETI ELEMENTA PRIE MASYVO=================================");
draugai[draugai.length] = "BYBYS";
for (let i = 0; i < draugai.length; i++) {
    console.log(draugai[i]);
}

console.log(draugai[4].length);
for (let a = 1; a <= 10; a++) {
    let row = "";
    for (let i = 1; i <= 10; i++) {
        if (a * i % 2 == 0) {
            row += "P ";
        } else {
            row += "N ";
        }
        //row += a * i + " ";
    }
    console.log(row);
}
console.log("========================TRECIAS==================================");
// Sukurkite masyvą su dešimt augalų pavadinimų.
let geles = ["berzas", "roze", "braskes", "beri", "bulve", "sermuksnis", "klevas", "tulpe", "azuoleli", "egle"];
console.log(geles);

console.log("========================Ketvirtas==================================");
// Atspausdinkite kiekvieną 3čio uždavinio augalą atskiroje eilutėje.
for (let i = 0; i < geles.length; i++) {
    console.log(geles[i]);
}
console.log("========================Penktas==================================");
// Atspausdinkite 3čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
for (let i = geles.length - 1; i >= 0; i--) {
    console.log(geles[i]);
}
console.log("========================Astuntas==================================");
// Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
let count = 0;
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }

}
console.log(count);
console.log("========================DEVINTAS==================================");
// Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. Skaičiuojam abu atskirai.
let skaic1 = 0;
let skaic2 = 0;
for (let i = 0; i < geles.length; i++) {
    console.log(geles[i]);
    if (geles[i].length < 5) {
        skaic1++
        continue
    }
    if (geles[i].length > 7) {
        skaic2++

    }
}
console.log("Augalai trumpesni nei 5 raides" + skaic1);
console.log("Augalai ilgesni nei 7  raides" + skaic2);

console.log("========================SUNKESNIS 1==================================");
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
// let min = 0;
// let max = 300;
// let result = 0;
// let didesni = 0;
// for (let i =0; i < 300; i++) {
//     result = Math.floor(Math.random() * (max - min) + min);
//     console.log("");
//     if (result>275) {
//         console.log("[" +  result +"]");
//     }else{
//         console.log(result);
//     }
//     if (result > 150) {
//         didesni++;
//     }
// }
// console.log("Kiek yra skaiciu didesnius uz 150 ->" + " " +  didesni);
console.log("========================VIENOJE LINIJOJ SUNKESNIS 1==================================");
let eil = "";
let did = 0;
result = 0;
for (let i = 0; i < 300; i++) {
    result = Math.round(Math.random() * 300);
    if (result >= 275) {
        eil += " [" + result + "] ";
    } else {
        eil += result + "  ";
    }
    if (result > 150) {
        did++;
    }
}
console.log(eil);
console.log("Kiek yra skaiciu didesnius uz 150 ->" + " " + did);


console.log("========================SUNKESNIS 2==================================");
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
let s = "";
for (let i = 1; i < 3000; i++) {
    if (i % 77 == 0) {
        s += i + ",";

    }

}
let slc = s.slice(0, -1) + '.';  // SLICE APRASYMAS !!!!
console.log(slc);

console.log("========================SUNKESNIS 3==================================");
//    Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
let bbs = "";
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += "*";
        bbs++
    }
    console.log(row);
}
console.log(bbs);
console.log("========================SUNKESNIS 4==================================");
// Prieš tai nupieštam kvadratui nupieškite istrižaines zaigzdute pakeisdami kitu simboliu. (reikės išsiaiškinti, kaip atvaizduoti tekstą HTML)
for (let i = 0; i < 10; i++) {
    let row = "";
    for (let j = 0; j < 10; j++) {
        if (j == i || j == 9 - i) {
            row += "x";
        } else {
            row += "*";
        }

    }
    console.log(row);
}

console.log("========================SUNKESNIS 5==================================");

// Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;
// sugeneruoti atsitiktini skaiciu parasyti while
let h1 = 0;
let s1 = 0;
let v = 0;
while (true) {
    let mon = Math.round(Math.random());
    console.log(mon);
    if (mon) {
        s1++

    }
    if (mon == 0) {
        h1++
        v++

    } else {
        h1 = 0;
    }
    if (h1 == 3) {
        break
    }
}
// b) if (mon==0) {
//     h1++
//     if (h1==3) {
//         break
//     }

// }
// a) if (mon==0) {
//     h1++
//     break
// } 
console.log(" herbas iskrito kartu ---> " + v + " skaicius iskrito kartu ---> " + s1);
console.log("========================SUNKESNIS 6==================================");
// Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
let petras = 0;
let kazys = 0;
let max = 20;
let min = 10;
let mins = 5;
let maxs = 25;
while (i > 10 || b > 5) {
    i = min + (Math.round(Math.random() * (max - min)));
    b = mins + (Math.round(Math.random() * (maxs - mins)));
    kazys += b;
    petras += i;
    // console.log("P gauna tasku --->"+ i + " " + "K gauna tasku--->" + b);
    // console.log (" bendri taskai PETRO" + "  "+ petras + " ||| " + "bendri  taskai KAZIO"  +" " + kazys );
    if (petras >= 222) {
        break
    }
    if (kazys >= 222) {
        break
    }
}
if (kazys >= 222 && kazys > petras) {
    console.log("Kazio turimi taškai" + " " + kazys + "|| " + "Petro turimi taškai" + " " + petras + " ||" + "Partiją laimėjo: Kazys");
} else {
    console.log("Kazio turimi taškai" + " " + kazys + " ||" + "Petro turimi taškai" + " " + petras + " ||" + "Partiją laimėjo: Petras");
}
console.log("========================SUNKESNIS 8==================================");
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą) “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių..
console.log("(a) ----------------------------------------dalis");
for (let z = 1; z < 6; z++) {
    let vin1 = 0;
    let kiek = 0;
    let min1 = 5;
    let max1 = 20;
    while (vin1<= 85) {
    i = min1 + (Math.round((Math.random()) * (max1 - min1)));
    vin1 += i;
    kiek++
    console.log(z + " " + " vinis" + i + " ");
    }
    console.log(z + "tas vinis" + " " + vin1 + " mm sulindo i lenta"  + "reikejo smugiu" + " "+ kiek);
}
console.log("(b) dalis ------------------------------------------------------------------------------------");
for (let z = 1; z < 6; z++) {
    let vin1 = 0;
    let kiek = 0;
    let min1 = 20;
    let max1 = 30;
    while (vin1<= 85) {
        if (Math.round(Math.random())) { // 50 % tikimybes sukurimas
            i = min1 + (Math.round((Math.random()) * (max1 - min1)));
            vin1 += i;  
        }
    kiek++
    console.log(z + " " + " vinis" + i + " ");
    }
    console.log(z + "tas vinis" + " " + vin1 + " mm sulindo i lenta"  + "reikejo smugiu" + " "+ kiek);
}