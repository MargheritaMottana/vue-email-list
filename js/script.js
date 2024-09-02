const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },

    // hook che indica il momento in cui viene creata la l'istanza Vue.
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            // per ottenere i dati della risposta, uso .then che serve a decretare cosa faccio quando ricevo la risposta
            // do un nome alla funzione (r, in questo caso = risposta), per ottenere l'oggetto contenente la risposta
            // nello specifico, la risposta che voglio sta nella chiave deta, quindi l'aggiungo per ottenere i dati
            // .responde è ancora più specifico perché ottengo il dato che voglio (la mail)
            .then(function (r) {
                console.log('r: ', r.data.response,)
            })

    },

}).mount('#app')

console.log('axios', axios, typeof axios)