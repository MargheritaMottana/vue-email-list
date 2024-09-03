const { createApp } = Vue

createApp({
    data() {
        return {
            // aggiunto array per contenere tutte le mail
            emails: [],
        }
    },

    // hook che indica il momento in cui viene creata l'istanza Vue.
    created() {

        // aggiunto ciclo per gestire la chiamata 10 volte
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                // per ottenere i dati della risposta, uso .then che serve a decretare cosa faccio quando ricevo la risposta
                // do un nome alla funzione (r, in questo caso = risposta), per ottenere l'oggetto contenente la risposta
                // nello specifico, la risposta che voglio sta nella chiave deta, quindi l'aggiungo per ottenere i dati
                // .responde è ancora più specifico perché ottengo il dato che voglio (la mail)
                .then((r) => {
                    console.log('r: ', r.data.response,)

                    // trasformata la funzione in arrow per poter usare il this
                    // in questo modo salvo il dato delle mail nell'array

                    this.emails.push(r.data.response)

                });
        };

    },

}).mount('#app')

console.log('axios', axios, typeof axios)