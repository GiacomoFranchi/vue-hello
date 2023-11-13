const { createApp } = Vue;

const app = createApp ({
    data() {
        return{
            text : "Preferisci i cani o i gatti?",
            inputAns : "",
            img: ""
        }
    },
    methods:{
        checkAns : function(){
            if(inputAns.toLowerCase() === "cani"){
                img = "https://www.petplace.com/article/dogs/breeds/dog-breeds/media_1e51607bf5488af3f6af7efbc0ac26be624866a24.jpeg?width=1200&format=pjpg&optimize=medium"
            } else if(inputAns.toLowerCase() == "gatti") {
                img = "https://cdn.wamiz.fr/article/images/Wamiz%20ITA/gatto-aggressivo-verso-un-altro.jpg"
            } else {
                img = "https://inglesedinamico.net/wp-content/uploads/2021/09/Animali-1.jpg"
            }
        }
    }
})
app.mount("#app")