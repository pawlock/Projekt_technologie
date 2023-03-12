const http = require('http');
const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const { PrismaClient } = require(`@prisma/client`)
const prisma = new PrismaClient()
prisma.$connect()
prisma.$disconnect()

app.get('/', express.static(path.join(__dirname, '/tech_net/build/index.html')))

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/tech_net/build/index.html'));
});
app.use("/", express.static('./tech_net/build'));
app.use('/', router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/teapot', (req, res) => {
  const body = req.body;
  console.log(body)
  res.status(418).send("I'm a teapot");
});

app.get('/books', (req, res) => {
    const fun = require(`./api/books.js`)
    fun.get(req,res,prisma);
});

app.get('/users', (req, res) => {
    const fun = require(`./api/users.js`)
    fun.get(req,res,prisma);
});

const server = app.listen(3000, function() {
  console.log('Server up');
});