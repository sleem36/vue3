const Sert = {
    data(){
        return {
            inputText: "",
            arr: []
        }
    },
    watch: {
        inputText(val){
            val.length < 14? this.inputText = this.inputText.toUpperCase():"";
        }
    },
    methods: {
        lowerCase(){
            console.log(this.arr);
        },
        add(){

        }
    }
}

Vue.createApp(Sert).mount("#app")