var express = require('express');

express()
.use(express.vhost('172.20.10.8', require('./hc')))
.listen(80,function(){
	 console.log("----------------AS READY----------------");
});