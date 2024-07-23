const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.JS',
        category: 'JavaScript',
        body: 'Este argio vai te ajudar a aprender sobre Node.JS',
        comments: 4
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
        title: 'Aprender Node.JS',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender sobre Node.JS',
        comments: 4,
        },
        {
        title: 'Aprender PHP',
        category: 'PHP',
        body: 'Teste',
        comments: 4,
        },
        {
        title: 'Aprender Python',
        category: 'Python',
        body: 'Teste',
        comments: 4,
        }
    ]
    res.render('blog', { posts })
})



app.get('/', (req, res) => {

    const user = {
        name: "Maykon",
        surname: "Fonseca",
        age: 17,
    }

    const palavra = "teste"

    const auth = true

    const approved = true

    res.render('home', { user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App Funcionando!')
})