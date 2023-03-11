const express = require('express');
const app = express();
const PORT = 3000;
app.get('/status', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("*", function(req,res){
    res.redirect('/status')
});

app.listen(PORT, () => {
  console.log('app is online')
})