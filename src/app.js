const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static(path.join(__dirname + '/portweb/index.html'));

app.use(express.json());

app.get('/math/daiva/is/cute/inverse', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.post('/inverse-permutation', (req, res) => {
  const inputArray = req.body.inputArray;

  if (!Array.isArray(inputArray)) {
    return res.status(400).json({ error: 'Input should be an array ex. [1,2,3,4,5].' });
  }

  const result = inversePermutation(inputArray);
  res.json({ result }); // Send the result as JSON
});

app.get('/status', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/invite', function(req, res){
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=938861493879967815&permissions=268512278&scope=bot%20applications.commands');
});

app.get('/me', function(req, res){
  res.sendFile(__dirname + '/portweb/index.html');
});

app.get("*", function(req, res){
    res.redirect('/status');
});

app.listen(PORT, () => {
  console.log('app is online');
});
