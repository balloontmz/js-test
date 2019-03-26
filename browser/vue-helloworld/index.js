var app = new Vue({
    el: '#app',
    data: {
        message: 'hello, tomtiddler!',
        seen: true,
        todos: [
            { text: 'learn javascript' },
            { text: 'learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

app.message = "this is my first web app"



// app.seen = false