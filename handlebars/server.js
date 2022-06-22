const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path');
const { engine } = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/public', express.static(`${__dirname}/public`))

app.engine('hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))


app.use('/', rutas)

app.listen(8080,()=>{
    console.log("Escuchando puerto 8080")
})