const express = require('express');
const app = express();
const PORT = 3000;
app.get('/status', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/invite', function(res, req){
    req.redirect('https://discord.com/api/oauth2/authorize?client_id=938861493879967815&permissions=268512278&scope=bot%20applications.commands')
});
app.get("*", function(req,res){
    res.redirect('/status')
});

app.listen(PORT, () => {
  console.log('app is online')
})
