const { query } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())

const users = [
    {id: 1, name: "Saddam", email: "saddam@gmail.com", phone: '01788888888'},
    {id: 2, name: "JAMMAM", email: "JAMMAM@gmail.com", phone: '01788888888'},
    {id: 3, name: "Sammam", email: "Sammam@gmail.com", phone: '01788888888'},
    {id: 4, name: "Mannan", email: "Mannan@gmail.com", phone: '01788888888'},
    {id: 5, name: "Slmann", email: "Slmann@gmail.com", phone: '01788888888'},
    {id: 6, name: "Jaddam", email: "Jaddam@gmail.com", phone: '01788888888'},
    {id: 7, name: "Baddam", email: "Baddam@gmail.com", phone: '01788888888'},
]

app.get('/user', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(users)
})

// Search Paramater filte == filter by query parameter
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const match = users.filter(use => use.name.toLowerCase().includes(search));
        res.send(match);
    }else{
        res.send(users)
    }
    
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})



app.listen(port, () => {
    console.log('listean port', port)
});