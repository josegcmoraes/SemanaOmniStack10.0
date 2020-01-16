const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
 
mongoose.connect('mongodb://jose:omnistack@cluster0-shard-00-00-rljxi.mongodb.net:27017,cluster0-shard-00-01-rljxi.mongodb.net:27017,cluster0-shard-00-02-rljxi.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
/*mongoose.connect('mongodb+srv://jose:omnistack@cluster0-rljxi.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});*/


app.use(express.json());
app.use(routes);
app.listen(3333); //