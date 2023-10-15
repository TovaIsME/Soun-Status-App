const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
app.use(express.static(path.join(__dirname + '/portweb')));
app.get('/status', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/invite', function(res, req){
    req.redirect('https://discord.com/api/oauth2/authorize?client_id=938861493879967815&permissions=268512278&scope=bot%20applications.commands')

})
app.get('/me' ,function(req, res){
  res.sendFile(__dirname + '/portweb/index.html');

})
app.get("*", function(req,res){
    res.redirect('/status')
});
function inversePermutation(arr) {
  const size = arr.length;
  const result = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[j] === i + 1) {
        result.push(j + 1);
        break;
      }
    }
  }

  return result;
}

app.use(express.json());

app.get('/math/daiva/is/cute/inverse-p', (req, res) => {
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
app.listen(PORT, () => {
  console.log('app is online')
})
