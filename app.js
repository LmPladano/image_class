const express = require('express')
const app = express() 
const path = require('path')
const models = require('./models')

app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/history',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/history.html'));
})

app.post('/send',(req,res) => {
    const label = req.body.label
    const confidence = req.body.confidence
    const image = req.body.image
    let history =models.History.build({
        label: label,
        confidence: confidence,
        image: image
    })
    history.save().then((persistenthistory) =>{
        console.log(persistenthistory)
    })
})

 app.get("/test", (req, res) => {
     models.History.findAll()
     .then(Histories => {
         res.json(Histories)
     })
 })

app.listen(3000,() => {
    console.log('Server is running...')
})