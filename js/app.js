console.log('hola')

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


// aggiungiamo evento al form
formElement.addEventListener('submit', function (e) {

    // preveniamo il comportamento di default
    e.preventDefault()

    // console.log('submit', e)

    // recuperiamo dati km
    const km = inputKmEvent.value
    console.log(km)

    // recuperiamo dati age
    const age = inputAgeEvent.value
    console.log(age)

    prezzoTotale = km * age
})









