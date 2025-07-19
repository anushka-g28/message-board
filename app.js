const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));

const messages = [
    {
        text:"Greetings",
        user:"Shinchan",
        added:"new Date()"
    },
    {
        text:"Goodbye",
        user:"Kazama",
        added:"new Date()"
    }
]

app.get('/',(req,res)=>{
    res.render('index',{messages});
});

app.get('/new',(req,res)=>{
    res.render('form');
});

app.post('/new',(req,res)=>{
    const {user,text} = req.body;
    messages.push({
        text,
        user,
        added: new Date()
    });
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
});

