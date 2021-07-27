/*
Descrizione:
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1, utilizzando
le properietà di Vue presenti in data.
Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
*/

// vue in console
Vue.config.devtools = true;

// inizializzazione vue e stampa a schermo messaggio
const app = new Vue({
    el: "#root",
    data: {
        greeting: "Hello",
        message: "Vue",
    },
    methods: {},
});