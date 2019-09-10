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


app.post('/getOpenOrders', async (req, res) => { 
    console.log(req.body);
    res.json({'openOrders':1,'date':2});
    });

    app.get('/getOpenOrders1', (req, res) => { 
        console.log(req);
        res.json({'openOrders':1008689,'date':2});
        });

app.get('/multiply/', (req, res) => { 
var result = req.query.data1*req.query.data2;
res.send('Product :'+result);
console.log(req.query)
});
app.get('/hi', (req, res) => res.send('Hello There!'))




app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))