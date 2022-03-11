const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
let allStudent = [];
app.set('view engine', 'ejs');
app.get('/',(req, res) => {
    res.render('pages/index', {allStudent})
    // console.log("Hello world")
})
app.get('/input',(req, res) =>{
    res.render('pages/input')
})
app.post('/input', (req, res) => {
    allStudent.push({...req.body, times:1});
    // console.log(allStudent)
    res.redirect('/')
})
app.post('/increase/:i', (req,res) =>{
    let {i} = req.params;
    allStudent[i].times = (allStudent[i].times) + 1;
    res.redirect('/')
})
app.post('/decrease/:i', (req,res) => {
    let {i} = req.params;
    allStudent[i].times = (allStudent[i].times) - 1;
    res.redirect('/')
})
app.listen(PORT,() =>{
    console.log("app listening on PORT:" + PORT)
})