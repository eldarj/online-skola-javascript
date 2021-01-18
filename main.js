// Objekti i console log
// 1. FUNKCIONALNOST (Javascript)
// 2. BAZU PODATAKA (SQL, MongoDB, Local Storage)
// 3. ISPIŠEŠ PODATKE NA STRANICU (document getElementById --- DOM)
var besim = {};

besim.ime = 'Besim';
besim.prezime = 'Dugalic';

var eldar = {}; // new Object() === {}

eldar.ime = 'Eldar';
eldar.prezime = 'Jahijagic';


console.log(besim);
console.log(eldar);

var osobe = [besim];
osobe.push(eldar);


// 2. console.log
console.log('This is console log.');
console.dir(osobe);

// 3. document.getElementById
var dataTableElement = document.getElementById('data-div');
dataTableElement.style.backgroundColor = 'white';
console.dir(dataTableElement);

var div = document.getElementById( 'data-div' );
div.onmouseover = function() {
  this.style.backgroundColor = 'green';
};

// for petlja
// for (var i = 0; i < osobe.length; i++) {
//     var j = osobe[i];
//     dataTableElement.innerHTML += '<p>' + j.ime + ' ' + j.prezime + '</p>';
// }

// foreach petlja
osobe.forEach(element => {
    dataTableElement.innerHTML += '<tr>' + '<td>' + element.ime + '</td>' + '<td>' + element.prezime + '</td>' + '</tr>';
});



// Javascript
// -- ispisat podatke
// -- promijenit CSS