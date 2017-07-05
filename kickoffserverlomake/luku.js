 
 // shift+alt+f nice looking code
var http = require('http');
var fs = require('fs');
var url = require('url');
//var path = require('path');

var formidable = require('formidable');

http.createServer(function (req, res) {


    //res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('testi');
    try {
 
 res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
} catch (e) { console.log(e.stack) }
}).listen(9999);

console.log('Server running at 8013');