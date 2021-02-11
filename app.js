const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://www.vuejs.org'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!'
            } else {
                return 'Get laid and get paid!'
            }
        }
    }
});

app.mount('#user-goal');