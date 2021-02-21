
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

    localStorage.setItem(key, JSON.stringify(noviNiz1));

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
  
    + `<td>
            <button 
                class="btn btn-sm btn-primary"
                onclick="prikaziDetalje('${element.ime}')">Prikaži detalje</button> 
            <button 
                class="btn btn-sm btn-danger"
                onclick="ukloniOsobu('${element.ime}')">Delete</button>
        </td>`
    + '</tr>';
});

var izbrisiSveOsobe = document.getElementById("izbrisiSveOsobe");

izbrisiSveOsobe.onclick = function() {
    localStorage.removeItem("NIZ_OSOBA");
    alert("Izbrisali ste sve osobe");
}


function prebrojOsobe() {
    const nizOsoba = JSON.parse(localStorage.getItem('NIZ_OSOBA'));
    var osobaDetalji=document.getElementById('Detaljno');
    osobaDetalji.innerHTML=`
    <br>
    <h4>Ukupno osoba: ${nizOsoba.length}</h4>
    `;
}

function prikaziDetalje(imeOsobe) {
    const nizOsoba = JSON.parse(localStorage.getItem('NIZ_OSOBA'));
    let {ime,prezime,adresa,godine} = nizOsoba.find(element => element.ime === imeOsobe);

    var osobaDetalji=document.getElementById('Detaljno');
    osobaDetalji.innerHTML=`
    <br>
    <h1>Detalji osobe</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Adresa</th>
                <th>Godine</th>
            </tr>
        </thead>
        <tbody>
           <tr>
               <td>${ime}</td>
               <td>${prezime}</td>
               <td>${adresa}</td>
               <td>${godine}</td>
            </tr>
        </tbody>
        
    </table>
    `;
}