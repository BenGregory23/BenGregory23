
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
