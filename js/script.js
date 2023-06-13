const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
        }
    },

    methods:{
        // getNewRandomNumber(){
        // }

    },

    created(){

        for( let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            const result = response.data;
            console.log(result.response);
            this.mails.push(result.response);
        });
        }
        
    }
}).mount('#app');