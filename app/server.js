const { sequelize } = require('./models/index');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
const path = require('path')

// Setting
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

// Routes
app.use(require('./routes/routes'));

// Public
app.use(express.static(path.join(__dirname, 'public')))

// Start Server
app.listen(app.get('port'), () => {
    console.log(`API REST corriendo en http.//localhost:${app.get('port')}`);

    sequelize.authenticate().then( () => {
        console.log('Se ha establecido la conecsión a la Base de datos')
    });
})