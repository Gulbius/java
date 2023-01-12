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
    
    let name1 = "Tomas";
    let name2 =  "Hanks";
    console.log(name1.toLowerCase());
    console.log(name2.toUpperCase());
 
    console.log("========================Trecias====================================");
    let nam1 = "Tomas" ;
    let nam2 =  "Hanks";
    let namsur = "";
    namsur = nam1.charAt(0) + " " +nam2.charAt(0);
    console.log(namsur);

    console.log("========================KETURI====================================");
    let name41 = "Tomas";
    let name42 =  "Hanks";
    let tris = "";
    tris = (name41.substring(name41.length-3)+name42.substring(name42.length-3)); 
    console.log(tris);

    console.log("========================PENKI====================================");
    let filmas = "An American in Paris";
    console.log(filmas.replaceAll('a', "*").replaceAll('A', "*"));

    console.log("========================SESTAS===================================");
    let balses = "An American in Paris";
    console.log(balses.replace(/[aeiou]/gi, ""));
    let balses2 = "Breakfast at Tiffany's"
    console.log(balses2.replace(/[aeiou]/gi, ""));
    let balses3 = "2001: A Space Odyssey";
    console.log(balses3.replace(/[aeiou]/gi, ""));
    let balses4= "It's a Wonderful Life";
    console.log(balses4.replace(/[aeiou]/gi, ""));

    console.log("========================SEPTINTAS===================================");
    let tekstas = "Star Wars: Episode "+ " ".repeat(Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
    console.log(tekstas);
    console.log(tekstas.includes((Math.ceil (Math.random() * 7)+1), 0));
