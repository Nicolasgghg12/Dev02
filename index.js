import express from 'express'
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Olá Mundo!')
})

app.get('/teste',(req,res)=>{
    res.json({msg:"teste", msg2:"teste2", msg3:"teste3"})
})

app.listen(port, ()=>{
    console.log(`API Rodando em http://localgost:${port}`);
})

//  npx nodemon index.js