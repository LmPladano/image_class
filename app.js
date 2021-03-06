const express = require('express')
const app = express() 
const path = require('path')
const models = require('./models')

app.use(express.json())
app.use("/public", express.static('./public/'));

const port = process.env.PORT || 8080

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
        res.status(200).send() 
    })
})

 app.get("/test", (req, res) => {
     models.History.findAll({
        limit: 10,
        where: {
          //your where conditions, or without them if you need ANY entry
        },
        order: [ [ 'createdAt', 'DESC' ]]
     })
     .then(Histories => {
         res.json(Histories)
     })
 })

app.listen(port,() => {
    console.log('Server is running')
})