var express = require('express')
var app     = express()
var routes  = require('./routes')

app.set('views', 'views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.use(express.bodyParser())
app.use(express.methodOverride())

app.use(express.static('./public'))

app.get('/', routes.index);
app.post('/alipayto',routes.alipayto);
app.get('/paynotify',routes.paynotify);
app.get('/payreturn',routes.payreturn);

app.listen(3000, function () {
	console.log('server port: ', 3000)
})
