function submitForm() {
    var forma = document.getElementById("forma-nova-osoba");
    console.dir(forma);
    var novaOsoba = {}
            for(i=0; i<novaOsoba ;i++){
            console.log(novaOsoba[i]);
        }
    
    novaOsoba.ime = forma.elements.imeOsobe.value;
    novaOsoba.prezime = forma.elements.prezimeOsobe.value;
    novaOsoba.adresa = forma.elements.adresaOsobe.value;

    console.log(novaOsoba);
   

    var success = saveToLocalStorage(novaOsoba.ime, novaOsoba)

    if (success === true) {
        alert('Uspjesno ste snimili osobu.');
    } else {
        alert('Doslo je do greske');
    }
}
let sveOsobe=["novaOsoba.ime.value","novaOsoba.prezime.value","novaOsoba.adresa.value"];

console.log(sveOsobe);

function saveToLocalStorage(ime, cijeliObject) {
    localStorage.setItem(ime, JSON.stringify(cijeliObject));
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