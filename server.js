var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

// app.get('/',function(req,res)
// {
// 	res.send('hello express!');
// });

app.get('/about',middleware.requireAuthentication, function(req,res)
{
	res.send('this is about express server, now changing track with GIT system once again');
});
//console.log('my folder ' + __dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT,function()
{
	console.log('server started ......' + PORT);
});