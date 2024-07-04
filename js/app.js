// console.log('hola')

/* Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Utilizzate Bootstrap come libreria UI.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

// recuperiamo il button dal DOM
// const buttonElement = document.getElementById('calcola')
// console.log(buttonElement)

// recuperiamo il form dal DOM
const formElement = document.getElementById('form-calcolo')
// console.log(formElement)

// recuperiamo input km
const inputKmEvent = document.getElementById('km')
// console.log(inputKmEvent)

// recuperiamo input age
const inputAgeEvent = document.getElementById('age')
// console.log(inputAgeEvent)

const prezzoBaseElement = document.getElementById('prezzo-base')

const scontoElement = document.getElementById('sconto')

const prezzoTotaleElement = document.getElementById('prezzo-totale')

// aggiungiamo evento al form
formElement.addEventListener('submit', function (e) {

    // preveniamo il comportamento di default
    e.preventDefault()

    // console.log('submit', e)

    // recuperiamo dati km
    const km = parseFloat(inputKmEvent.value) // number 
    // console.log(km)

    // recuperiamo dati age
    const age = parseInt(inputAgeEvent.value) // number 
    // console.log(age)

    // dichiarazione variabili
    let prezzoBase = km * 0.21 // number 
    // console.log(prezzoBase)

    prezzoBaseElement.innerHTML = prezzoBase.toFixed(2)

    // dichiariamo la variabile sconto
    let sconto // undefined 

    /* SE età < 18 
        - assegnamo sconto minorenni */
    if (age < 18) {
        sconto = prezzoBase * 0.2 // number
        // console.log(sconto)
    }
    /* ALTRIMENTI SE età > 65 
        - assegnamo sconto over 65 */
    else if (age > 65) {
        sconto = prezzoBase * 0.4 // number
        // console.log(sconto)
    }
    // ALTRIMENTI sconto 0 
    else {
        sconto = 0 // number
        // console.log(sconto)
    }

    // recuperiamo sconto
    scontoElement.innerHTML = sconto.toFixed(2)

    // stampiamo in html prezzo base
    // const stampaPrezzoBase = document.getElementById('prezzo-base')
    // console.log(stampaPrezzoBase)

    // stampiamo in html sconto
    // const stampaSconto = document.getElementById('sconto')
    // console.log(stampaSconto)

    // calcoliamo prezzo totale
    let prezzoTotale = prezzoBase - sconto
    // console.log(prezzoTotale)

    // stampiamo in html prezzo totale
    prezzoTotaleElement.innerHTML = prezzoTotale.toFixed(2)
})