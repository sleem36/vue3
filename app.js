const Tre = {
    data(){
        return {
            counter: 0,
            inputValue: "",
            node: []
        }
    },
    methods: {
        changeInputValue(e){
            this.inputValue = e.target.value;
        },
        add(){
            this.node.push(this.inputValue);
            console.log(this.node);
            this.inputValue = '';
        },
        clear(){
            this.node.pop(this.inputValue);
        },
        del(e){
            console.log(e.target);
            e.target.parentNode.remove();
        },
        spliceS(index, e){
            console.log(e.target, index );
            this.node.splice(index,1);
        },
        spl(elem, index){
            if(index < 2) {
                return elem.toUpperCase();
            } else {
                return elem + '!!!';
            }

        },
        getter(){
            console.log('getter');
            return this.node.length * 3;
        }
    },
    computed: {
        getterBetter(){
            console.log('getterBetter');
            return this.node.length * 4;
        }
    }
}

Vue.createApp(Tre).mount("#app")