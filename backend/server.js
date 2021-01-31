import express from 'express'
import data from './data.js'

const app=express();

app.get('/', (req, res)=>{
  res.send('server ready')
})

app.get('/api/products', (req, res)=>{
  res.send(data.products)
})

const port=process.env.PORT||4200
app.listen(port, ()=>{
  console.log(`serve at https://localhost:${port}`)
})
