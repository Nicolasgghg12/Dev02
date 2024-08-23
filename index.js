import express from 'express'
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Olá Mundo!')
})

app.get('/teste',(req,res)=>{
    res.json({msg:"teste", msg2:"teste2", msg3:"teste3"})
})

app.get('/tabuada',(req,res)=>{
    let numDaTabuada = 3
    let respEnviarFinal = ""
    for (let index = 0; index < 10; index++) {
        respEnviarFinal += `<center>|  ${numDaTabuada} x ${index} = ${numDaTabuada*index} | </center> <br>`
    }

    res.send(respEnviarFinal)
})

app.listen(port, ()=>{
    console.log(`API Rodando em http://localgost:${port}`);
})

//  npx nodemon index.js