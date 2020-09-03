const express = require('express');
const app = express();
const PORT = 3090;

// Request, Response
const callBack = (req, res) => {
  console.log('In registration');
  console.log(`Path: ${req.path}`);
  const x = {
    name: 'Softwarica College of IT & E-commerce',
    about:
      'Softwarica College is working in collaboration with Coventry University to offer a range of undergraduate programmes, BSc (Hons) Computing and BSc (Hons) Ethical Hacking & Cybersecurity. On successful completion students will receive Coventry University degree award.',
    contact: {
      location: 'Dillibazar, Kathmandu',
      email: 'info@softwarica.edu.np',
      phone_no: '01-4441577, 4425661',
    },
    programmes_offered: [
      'BSc (Hons) Ethical Hacking and CyberSecurity',
      'BSc(Hons) Computing',
    ],
  };
  res.status(200).json(x);
  // res.send('test');
};

app.get('/api/about', callBack);
app.get(
  '/api/booking',
  (req, res, next) => {
    console.log(`Path: ${req.path}`);
    console.log('In first middleware do something');
    next();
  },
  (req, res, next) => {
    console.log(`Path: ${req.path}`);
    console.log('In second middleware // send something');
    res.status(200);
    res.send('<h4>In second middleware</h4>');
    next();
  }
);

// Listener
app.listen(PORT, () => `Listening to port: ${PORT}`);
