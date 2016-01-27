var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication : function(req,res,next)
	{
		console.log('private route hit');
		next();
	},
	logger: function(req,res,next)
	{
		var date = new Date();
		console.log('request:' + req.method + ' ' + req.originalUrl + ' @' + date.toString());
		next();
	} 
}
// press ctrl-shift-r for hard reload

app.use(middleware.logger);

// app.get('/',function(req,res)
// {
// 	res.send('hello express!');
// });

app.get('/about',middleware.requireAuthentication, function(req,res)
{
	res.send('this is about express server, now changing track with GIT system');
});
//console.log('my folder ' + __dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT,function()
{
	console.log('server started .....' + PORT);
});