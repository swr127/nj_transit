const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use('/', routes)

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
