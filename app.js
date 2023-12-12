if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers/index')
const cors = require('cors')
const responseHandler = require('./helpers/response')


// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.use(responseHandler.errorResponse)

app.listen(port, () => {
  console.log('app berjalan');
  console.log('localhost:' + port);
})