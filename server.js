var express = require("express");

var app = express();

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRoutes").app;
require("./routes/htmlRoutes").app;

app.listen(PORT, function(){
    console.log("We are listening to "+ PORT);
});