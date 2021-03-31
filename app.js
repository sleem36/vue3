const Saer = {
    data(){
        return {
            text: "",
            arr: [1,2,3,4,5,6,7,8],
            obj: {id: "qwe", id: "wer", id: "ert"}
        }
    },
    methods: {
        del_obj(idx){
            delete this.obj[idx];
        },
        del(idx){
            this.arr.splice(idx, 1);
        },
        test(){
            this.$refs.test.innerHTML = "test";
        },
        add(event){
            this.arr.unshift(event.target.value);
            event.target.value='';
        }
    },
    computed: {
        evens(idx) {
            return this.arr.filter(id => id % 2===0);
        }
    }
}
Vue.createApp(Saer).mount("#app")