const express = require('express')
const app = express()
const bodyparser = require('body-parser')


app.use(bodyparser.json());
app.post('/add', (req, res) => { 
var result = req.body.data1+req.body.data2;
res.send('Addition :'+result);
console.log(req.body)
});
app.post('/divide', (req, res) => { 
var result = req.body.data1/req.body.data2;
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ Division:result }));
console.log(req.body)
});

app.get('/multiply/', (req, res) => { 
var result = req.query.data1*req.query.data2;
res.send('Product :'+result);
console.log(req.query)
});
app.get('/hi', (req, res) => res.send('Hello There!'))
app.get('/', (req, res) => res.send('Hello...!'))





app.listen(3000, () => console.log('Example app listening on port 3000!'))