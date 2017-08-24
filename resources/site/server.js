var express = require('express')
var http = require('http')
var path = require('path')

var app = express()

app.set('port', process.env.PORT || 3001)

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'index.html')) })
app.get('/index.html', function (req, res) { res.sendFile(path.join(__dirname, 'index.html')) })
app.get('/links.html', function (req, res) { res.sendFile(path.join(__dirname, 'links.html')) })
app.use('/libs', express.static(path.join(__dirname, 'libs')))
app.use('/demos', express.static(path.join(__dirname, 'demos')))
app.use('/exercises', express.static(path.join(__dirname, 'exercises')))

var server = http.createServer(app)

server.listen(app.get('port'), function () { console.log('Web server started on port ' + app.get('port'),__dirname) })

