
const calculate = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    // ============== Alle Elemente holen =======================
    // Inputs holen
    let groesse = Number(document.querySelector("#groesse").value);
    let alter = Number(document.querySelector("#alter").value);
    let gewicht = Number(document.querySelector("#gewicht").value);
    console.log(groesse, alter, gewicht);

    // Körperbau holen
    let weiblich = document.querySelector("#weiblich").checked;
    let maennlich = document.querySelector("#maennlich").checked;
    console.log(weiblich, maennlich);

    // Aktivitäten holen
    let aktivitaet = Number(document.querySelector("#aktivitaet__select").value);
    console.log(aktivitaet);

    // ============== Alle Berechnungen =======================
    let grundumsatz;
    //Wenn körperbei Weiblich
    if (weiblich) {
        grundumsatz = (655.1 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter)) / 1000;
    }
    //Wenn körperbei Männlich
    else {
        grundumsatz = (664.7 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter)) / 1000;
    }


    // Gesamtumsatz berechnen
    let gesamtumsatz = aktivitaet * grundumsatz


    console.log("Grundumsatz:" + grundumsatz);
    console.log("Gesamtumsatz:" + gesamtumsatz);

    // ============== Ergebnisse in die Tabelle einfügen =======================
    // Von kcal auf kj = Mit 4,184 multiplizieren
    document.querySelector("#grundKCAL").innerHTML = grundumsatz.toFixed(3);
    document.querySelector("#grundKJ").innerHTML = (grundumsatz * 4.184).toFixed(3);

    document.querySelector("#gesamtKCAL").innerHTML = gesamtumsatz.toFixed(3);
    document.querySelector("#gesamtKJ").innerHTML = (gesamtumsatz * 4.184).toFixed(3);
})
