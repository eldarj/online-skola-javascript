function ukloniOsobu(key) {
    console.log(key);

    // TODO
    // - ukloni osobu iz localstorage
    localStorage.removeItem(key);

    // 1. refreshaj page
    location.reload();

    // 2. refreshaj tabelu (sa npr. table.removeRow)
}
function DodajOsobu(sveOsobe) {
    console.log(sveOsobe);

  
    localStorage.push(sveOsobe);

    
    location.reload();


}

var sveOsobe=[
    {
        ime:"Besim",
        prezime:"Dugalic",
        adresa:"Slavinovici"
    },
    {
        ime:"Eldar",
        prezime:"Jahijagic",
        adresa:"Brcanska Malta"
    },
    {
        ime:"Maid",
        prezime:"Lolic",
        adresa:"Sjenjak"
    }
  

];


// TODO: Izbrisi ovo hard-kodirano osobe, već koristi sve iz localStorage

var dataTableElement = document.getElementById('data-div');


console.dir(dataTableElement);

var div = document.getElementById( 'data-div' );

sveOsobe.forEach(element => {
    dataTableElement.innerHTML += '<tr>' 
    + '<td>' + element.ime + '</td>' 
    + '<td>' + element.prezime + '</td>' 
    + `<td>${element.adresa}</td>`
    + `<td><button onclick="document.location=\'Edit.html\'">Edit</button> <button onclick="ukloniOsobu('${element.ime}')">Delete</button></td>`
    + '</tr>';
});


// TODO: Promijeni iz getItem("Eldar") u getItem("sveOsobe")
// DOHVATI SVE OSOBE IZ LOCAL STORAGE
var sveOsobe = localStorage.getItem(sveOsobe, JSON.stringify(sveOsobe)); // KAD GOD DOHVATAMO PODATKE IZ LOCALSTORAGE; KORISTIMO JSON.parse
var sveOsobe = JSON.parse(sveOsobe);
console.log('SVE OSOBE IZ LOCAL STORAGE');
console.dir(sveOsobe);
console.log(sveOsobe);

// PRIKAZI U HTML (TODO: PRomijeni da radi sa nizom "sveOsobe" a ne "eldar")

dataTableElement.innerHTML += '<tr>'
+ '<td>' + sveOsobe.ime + '</td>' 
+ '<td>' + sveOsobe.prezime + '</td>' 
+ '<td>' + sveOsobe.adresa + '</td>'
+ `<td><button onclick="document.location=\'Edit.html\'">Edit</button> <button onclick="ukloniOsobu('${sveOsobe.ime}')">Delete</button></td>`
+ '</tr>';