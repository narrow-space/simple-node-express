const express = require('express')
const cors = require('cors')



const app = express()
app.use(cors())
app.use(express.json())
const port = 5000;
app.get('/', (req, res) => {
    res.send('wow i am excited hdjhuj')
})

const users = [
    { id: 0, name: 'sabrina', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 2, name: 'saabnur', email: 'sabanur@gmail.com', phone: '017888888' },
    { id: 3, name: 'kona', email: 'kona@gmail.com', phone: '017888888' },
    { id: 4, name: 'susmita', email: 'susmita@gmail.com', phone: '017888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult)
    }
    else {
        res.send(users)
    }

})
//app method
app.post('/users',(req,res)=>{
    const newUser =req.body;
    newUser.id=users.length
    users.push(newUser)
    console.log('hittingg the post',req.body);
    // res.send('inside the post')
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy fazli');
})


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'kola', 'licu', 'komola'])
})
app.listen(port, () => {
    console.log("listing to port", port);
})