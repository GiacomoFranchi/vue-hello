const { createApp } = Vue;

const app = createApp ({
    data() {
        return{
            text : "Preferisci i cani o i gatti?",
            inputAns: "" ,
            imgS: "https://www.ilverdemondo.it/public/blog/thumbs/animali-da-cortile-quali-sono-e-come-allevarli-it-000.jpg"
        }
    }
})
app.mount("#app")