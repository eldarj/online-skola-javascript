var besim = {};

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
    dataTableElement.innerHTML += '<tr>' + '<td>' + element.ime + '</td>' + '<td>' + element.prezime + '</td>' + '<td>' + element.adresa + '</td>'+ '</tr>';
});