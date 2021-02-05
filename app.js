const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://www.vuejs.org'
        }
    }
});

app.mount('#user-goal');