//variables, constats, instances
const express = require('express');
const app = express();

//configs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

//functions
app.get('/', (req, res) => {
  res.render('index');
})

app.listen(8080, () => {
  console.log("Rodando")
})
