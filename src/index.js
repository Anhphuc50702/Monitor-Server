const mqtt=require('mqtt');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;


const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

//HTTP logger
//app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



//Routes init

route(app);

io.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});
