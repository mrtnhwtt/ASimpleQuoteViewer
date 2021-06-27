const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const axios = require('axios');
const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));
app.use(express.static('public'))

app.get('/', (req, res) => {
    axios({
        method: "get",
        url: "https://quotes.rest/qod?language=en"
    }).then(response => {
        res.render('index', { reponse: response.data });
    }).catch((err) => { console.log(err) })
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(
    port,
    () => console.log(`Go to http://localhost:${port}`)
)