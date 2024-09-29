const app = Vue.createApp({
    data() {
        return {
            msg: 'Form input binding',
            age: null,
            selectedOption: null,
            trafficLight: null,
            subscribe: null,
            cart: [],
        }
    },
    methods: {
        updateName(msg, event) {
            console.log(msg);
            console.log(event);
            this.msg = event.target.value;
        },
    },
}).mount('#app');

