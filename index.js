const { callBack, middleware } = require('./controllers/apiController');
const express = require('express');
const app = express();
const PORT = 3090;

//Request
app.get('/api/about', callBack);
middleware(app);

// Listener
app.listen(PORT, () => `Listening to port: ${PORT}`);
