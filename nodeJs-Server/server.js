const express = require('express');
const app = express();
console.log("hello world")
app.listen(3010, ()=> {
    console.log("npm start tharparkar")
})
app.use('/test', (req, res)=>{
    res.send({massage: 'Data Receiving'})
})

app.use('/getdata', (req, res)=>{
    res.send({
        name: "Kharumal",
        roll: 116,
        school: "saylani",
        massage: 'Data Receiving'
    })
})

// cmd
// command run on file name 
// =====node file name.js====
// then
// =====npm init====
// then
// =====npm install express====
// then
// =====ipconfig==== for ip address 

 
//======get data on console fetch function====//

// fetch()
// .then(response => response.json())
// .then(json => console.log(json))