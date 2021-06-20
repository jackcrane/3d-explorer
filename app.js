// npm i express
// npm i ejs
// create index.ejs in /views folder

const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', {
    // Object to send to index.ejs
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
