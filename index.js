const { callBack, middleware } = require('./controllers/apiController');
const express = require('express');
const app = express();
const PORT = 3090;

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Request
app.get('/', (req, res) => res.redirect('home'));

app.get('/home', (req, res) => {
  res.render('home', { title: 'Softwarica College of IT & E-commerce' });
});

app.get('/api/about', callBack);
middleware(app);

app.use((req, res) => res.redirect('home'));

// Listener
app.listen(PORT, () => `Listening to port: ${PORT}`);
