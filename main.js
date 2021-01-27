function ukloniOsobu(ime) {
    console.log(ime);

    var key = 'NIZ_OSOBA';

    // 1. Dohvati NIZ_OSOBA
    var sveOsobeJson = localStorage.getItem(key);
    console.log(sveOsobeJson);

    // 2. Izbrisi jednu osobu s ovim imenom
    var sveOsobe = JSON.parse(sveOsobeJson);
    var noviNiz = [];

    sveOsobe.forEach(element => {
        if (element.ime != ime) {
            noviNiz.push(element);
        }
    });

    // 3. Ponovo snimi "novi" niz
    localStorage.setItem(key, JSON.stringify(noviNiz));

    location.reload();
}

function izaberiOsobu(ime) {
    // 1. Dohvati NIZ_OSOBA

    // 2. Nadji jednu osobu, gdje je ime == ime

    // 3. document get element by id 'osoba-detalji'

    // 4. ispisi html sa vrijednostima osobe npr. ime, prezime itd.
}

var dataTableElement = document.getElementById('data-div');
console.dir(dataTableElement);

var div = document.getElementById( 'data-div' );

// DOHVATI SVE OSOBE IZ LOCAL STORAGE POD KEY 'NIZ_OSOBA'
var sveOsobe = localStorage.getItem('NIZ_OSOBA'); // KAD GOD DOHVATAMO PODATKE IZ LOCALSTORAGE; KORISTIMO JSON.parse
sveOsobe = JSON.parse(sveOsobe);
console.log('SVE OSOBE IZ LOCAL STORAGE');
console.dir(sveOsobe);

// PRIKAZI U HTML
sveOsobe.forEach(element => {
    dataTableElement.innerHTML += '<tr>' 
    + '<td>' + element.ime + '</td>' 
    + '<td>' + element.prezime + '</td>' 
    + `<td>${element.adresa}</td>`
    + `<td><button onclick="document.location=\'detalji-osobe.html\'">Edit</button> <button onclick="ukloniOsobu('${element.ime}')">Delete</button></td>`
    + '</tr>';
});