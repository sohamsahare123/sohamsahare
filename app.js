const express = require('express');
const app = express();
const formidable = require('express-formidable');
const expressEjsLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv")

dotenv.config()

app.use(express.static('public'));
app.use(formidable());

app.set('views');

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

app.use('/', require('./routes'));
app.use('/projects', require('./routes/projects'));
app.use('/blogs', require('./routes/blogs'));

app.listen(PORT, () =>
    console.info(`App running on : http://localhost:${PORT}/`)
)