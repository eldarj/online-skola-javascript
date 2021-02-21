function submitForm() {
    var forma = document.getElementById("forma-nova-osoba");
    console.dir(forma);
    
    var novaOsoba = {}; // OBJEKAT
    novaOsoba.ime = forma.elements.imeOsobe.value;
    novaOsoba.prezime = forma.elements.prezimeOsobe.value;
    novaOsoba.adresa = forma.elements.adresaOsobe.value;
    novaOsoba.godine=forma.elements.brojGodina.value
    /* 
    novaOsoba = {
        'ime': 'Besim',
        'prezime': 'Dugalic',
        'adresa': 'BM'
    }
    */
    console.log(novaOsoba);

    var success = saveToLocalStorage(novaOsoba)

    if (success === true) {
        alert('Uspjesno ste snimili osobu.');
    } else {
        alert('Doslo je do greske');
    }
}

function saveToLocalStorage(cijeliObject) {
    var key = 'NIZ_OSOBA';

    // 1. Dohvati vrijednost NIZ_OSOBA
    var nizJson = localStorage.getItem(key);

    // 2. Pretvori niz iz json-a
    var niz = JSON.parse(nizJson);

    // 3. Ako je niz == null, kreiraj ga praznog
    if (niz == null) {
        niz = [cijeliObject];
    } else {
        // 4. Dodaj novu osobu u niz
        niz.push(cijeliObject);
    }

    // 5. Snimi niz osoba
    localStorage.setItem(key, JSON.stringify(niz));

    return true;
}



// TODO:
// 1. Snimi niz osoba pod key = "sveOsobe" u localStorage
// ---- dohvati sve postojece osobe (JSON.parse)
// ---- dodaj novu osobu u postojeci niz
// ---- snimi taj cijeli niz ponovo pod isti key = "sveOsobe" (JSON.stringify)

/*
Map localStorage = 
{{
    "eldar" -> {ime: ..., prezime: ..., adresa: ...}
}}
*/


// JSON je string reprezentacija bilo kojeg objekta u Javascript ---- localStorage radi samo sa Stringom 
// -- stringify pretvara bilo sta u String
// -- parse() pretvara bilo sta u objekat