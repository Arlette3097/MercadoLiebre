const express=require ('express');
const path=require('path');

const app=express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/home', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(htmlPath);
} )

app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/login.html');
    res.sendFile(htmlPath);
} )

app.get('/signup', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/signup.html');
    res.sendFile(htmlPath);
} )