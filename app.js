if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = 3000
const router = require('./router')
const errHandler = require('./middlewares/errHandler')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(errHandler)


app.listen(PORT, () => console.log('listening on port: ', PORT))