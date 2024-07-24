const express = require('express');
//const { path } = require('express/lib/application');
const app = express();
const path = require('path');

const myLogger = (req, res, next) => {
  console.log('Middlewar Log 1 ');
  next(); // req ve res in çakışmaması için ilerleme yapması için bu komut yazılmalı
};
const myLogger2 = (req, res, next) => {
  console.log('Middlewar Log 2 ');
  next(); // req ve res in çakışmaması için ilerleme yapması için bu komut yazılmalı
};

//MIDDLEWARES

app.use(express.static('public'));
// app.use(myLogger);
// app.use(myLogger2);

app.get('/', (req, res) => {
  //   const photo = { id: 1, name: 'photo name', description: 'Photo Description' };
  //   res.send(photo);

  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
