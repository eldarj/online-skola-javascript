function ukloniOsobu(key) {
    console.log(key);

    // TODO
    // - ukloni osobu iz localstorage
    localStorage.removeItem(key);

    // 1. refreshaj page
    location.reload();

    // 2. refreshaj tabelu (sa npr. table.removeRow)
}

var besim = {};

// TODO: Izbrisi ovo hard-kodirano osobe, već koristi sve iz localStorage
besim.ime = 'Besim';
besim.prezime = 'Dugalic';
besim.adresa='Slavinovici';
console.log(besim);
var eldar={};

eldar.ime='Eldar';
eldar.prezime='Jahijagic';
eldar.adresa='Brcanska Malta';
console.log(eldar);
var osobe = [besim];
osobe.push(eldar);
console.dir(osobe);

var dataTableElement = document.getElementById('data-div');

console.dir(dataTableElement);

var div = document.getElementById( 'data-div' );

osobe.forEach(element => {
    dataTableElement.innerHTML += '<tr>' 
    + '<td>' + element.ime + '</td>' 
    + '<td>' + element.prezime + '</td>' 
    + `<td>${element.adresa}</td>`
    + `<td><button onclick="document.location=\'Edit.html\'">Edit</button> <button onclick="ukloniOsobu('${element.ime}')">Delete</button></td>`
    + '</tr>';
});


// TODO: Promijeni iz getItem("Eldar") u getItem("sveOsobe")
// DOHVATI SVE OSOBE IZ LOCAL STORAGE
var eldarJson = localStorage.getItem("Eldar"); // KAD GOD DOHVATAMO PODATKE IZ LOCALSTORAGE; KORISTIMO JSON.parse
var eldar = JSON.parse(eldarJson);
console.log('SVE OSOBE IZ LOCAL STORAGE');
console.dir(eldar);

// PRIKAZI U HTML (TODO: PRomijeni da radi sa nizom "sveOsobe" a ne "eldar")
dataTableElement.innerHTML += '<tr>'
+ '<td>' + eldar.ime + '</td>' 
+ '<td>' + eldar.prezime + '</td>' 
+ '<td>' + eldar.adresa + '</td>'
+ `<td><button onclick="document.location=\'Edit.html\'">Edit</button> <button onclick="ukloniOsobu('${eldar.ime}')">Delete</button></td>`
+ '</tr>';

