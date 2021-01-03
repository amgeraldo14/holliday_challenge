const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const formatRupiah = require('./helpers/formatRupiah.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.locals.formatRupiah = formatRupiah
app.use('/', router)

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`)
})