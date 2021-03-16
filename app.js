const Wer = {
    data(){
        return {
            inputText: "",
            arr: []
        }
    },
    methods: {
        add(){
            if(this.inputText != '') {
                this.arr.push(this.inputText);
            }
            this.inputText = '';
        },
        remove(index){
            this.arr.splice(index,1);
        }
    },
    computed: {

    },
    watch: {
        inputText(value){
            if(value.length < 4) this.inputText = this.inputText.toUpperCase();
        }
    }
}

Vue.createApp(Wer).mount("#app")