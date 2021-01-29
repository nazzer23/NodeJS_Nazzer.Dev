const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
app.use(express.static(__dirname + '/public'));

app.use(function(req,res){
    res.status(404).sendFile(__dirname+'/public/404.html');
});