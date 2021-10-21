const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from second node express with nodemon, automatic restart Wow i got it.')
});

const users = [
    { id: 0, name: 'Rony', email: 'rony@gmail.com', phone: '017888888' },
    { id: 1, name: 'Rony Alone', email: 'rony1@gmail.com', phone: '017888881' },
    { id: 2, name: 'Rony Double', email: 'rony2@gmail.com', phone: '017888882' },
    { id: 3, name: 'Rony Triple', email: 'rony3@gmail.com', phone: '017888883' },
    { id: 4, name: 'Rony4', email: 'rony4@gmail.com', phone: '017888884' },
    { id: 5, name: 'Rony5', email: 'rony5@gmail.com', phone: '017888885' },
]

// use quary parameter
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// Dynamic Api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send('This is frits section')
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("This fruits is yammy")
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})