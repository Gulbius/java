     // let actorName = "LeonardasDicaprio";
    // console.log(actorName.length);   // nustato kintamojo ilgi raidem ir tarpais
    // console.log(actorName.toLowerCase());
    // console.log(actorName.toUpperCase());
    // console.log(actorName.charAt(0)); // nustato kuria raide rodyti 0 yra pirma raide
    // console.log(actorName.substring(0,1));/// nurodo nuo kurios iki kokios raides paimti
    // console.log(actorName.substring(actorName.length-3)); /// paima tris raides nuo galo SLICE IR SPLICE
    // console.log(actorName.replace("a", "u"));
    // console.log(actorName.replaceAll("a", "u"));// pakeisti raides viena kitom
    console.log("========================PIRMAS===================================="); 
    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
    let aktorius = "TomasHanks";
    console.log(aktorius);
    let vardas = "Tomas"
    let pavard= "Hanks"
    if (vardas.length<pavard.length) {
        console.log(vardas);
    }
    else{
        console.log(pavard);
    }
    console.log("========================ANTRAS====================================");
    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
    let name1 = "Tomas";
    let name2 =  "Hanks";
    console.log(name1.toLowerCase());
    console.log(name2.toUpperCase());
 
    console.log("========================Trecias====================================");
    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
    let nam1 = "Tomas" ;
    let nam2 =  "Hanks";
    let namsur = "";
    namsur = nam1.charAt(0) + " " +nam2.charAt(0);
    console.log(namsur);

    console.log("========================KETURI====================================");
    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
    let name41 = "Tomas";
    let name42 =  "Hanks";
    let tris = "";
    tris = (name41.substring(name41.length-3)+name42.substring(name42.length-3)); 
    console.log(tris);

    console.log("========================PENKI====================================");
    // Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
    let filmas = "An American in Paris";
    console.log(filmas.replaceAll('a', "*").replaceAll('A', "*"));

    console.log("========================SESTAS===================================");
    // Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
    let balses = "An American in Paris";
    console.log(balses.replace(/[aeiou]/gi, ""));
    let balses2 = "Breakfast at Tiffany's"
    console.log(balses2.replace(/[aeiou]/gi, ""));
    let balses3 = "2001: A Space Odyssey";
    console.log(balses3.replace(/[aeiou]/gi, ""));
    let balses4= "It's a Wonderful Life";
    console.log(balses4.replace(/[aeiou]/gi, ""));

    console.log("========================SEPTINTAS===================================");
    // Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
    let tekstas = "Star Wars: Episode "+ " ".repeat(Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
    console.log(tekstas)
    console.log("Epizodo Nr.->"+tekstas[tekstas.length-14]);// galima su replace ir (/[aeiou]/gi, "")); arba email regex
    console.log("========================ASTUNTAS===================================");
    // Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
   
    let nigga = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood ";
    console.log(nigga);
    raides = nigga.split(' ').length;
    result = "";
    if (raides<= 5) {
        result = nigga -raides;
        console.log(result);
    }
    console.log("========================DEVINTAS===================================");
    // Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
    
    let characters = "qwertyuiopasdfghjklzxcvbnm"
    let charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    console.log();
    let lot = (Math.random(A-Z, a-z, 0-9));
    console.log(lot[lot.length-3]);
   
    
   