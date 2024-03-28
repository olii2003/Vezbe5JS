


function menjanjeBoje(boja){

    let obrisiDugmad= document.getElementsByClassName("obrisi");
    for (const i of obrisiDugmad) {
        i.style.backgroundColor = boja;

    }


}

//menjanjeBoje("green");

let menjanjeBojeA = (boja) => {

    let obrisiDugmad = document.getElementsByClassName("obrisi");

    for (const i of obrisiDugmad) {
        i.style.backgroundColor = boja;

    }


}


// menjanjeBojeA("blue");

let menjanjeBojeb = (boja) =>  Array.from(document.getElementsByClassName("obrisi")).forEach(dugme => dugme.style.backgroundColor = boja);
menjanjeBojeb = ("blue");


let dugmici= document.getElementsByClassName("obrisi");

for (const dugme of dugmici) {
    dugme.addEventListener("click", function(e){
        let elementZaBrisanje = this.parentNode;
       elementZaBrisanje.remove();
        document.getElementById("lista").removeChild;

    })

}

//function obrisiRed(){
//this.parentNode.remove();
//}


function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");
     let nazivDestinacije = inputPolje.value;

     if(nazivDestinacije){
        let ul = document.getElementById("lista");
        let noviLi = document.createElement("li");

        noviLi.innerHTML = `	<span class="naziv">${nazivDestinacije}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(noviLi);

        inputPolje.value = "";
     }

}

function pozivCallback(){
    let forma=document.forms("dodaj-destinaciju");
    forma.addEventListener("submit", dodajDestinaciju);
}

//document.addEventListener("DOMContentLoaded",pozivCallback);