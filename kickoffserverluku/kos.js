// shift+alt+f nice looking code
//var http = require('http');
//var fs = require('fs');
//var url = require('url');
//var path = require('path');

var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra');
 


http.createServer(function (req, res) {


    //res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('testi');
    try {
        //require('C:\\Users\\pakars4\\');
        //console.log(req);
        //console.log(req.eventNames);
        //console.log(req.read);
        if (req.url == '/kos.js') {
            var form = new formidable.IncomingForm();

            /*  fs.readFile(req.files.testifaili.path, function (err, data) {
                  // ...
                  var newPath = 'C:/Users/pakars4/Desktop/kickofftietoportaali/angular-2-template-master_1/app/plans/'+files.name;
                  fs.writeFile(newPath, data, function (err) {
                      res.redirect("back");
                  });
              });*/


            form.parse(req, function (err, fields, files) {

                console.log(files);

                var oldpath = files;
				// korvaa tämä omalla pathilla
                var newpath =
                    path.join('C:', 'Users', 'pakars4', 'Desktop', 'kickofftietoportaali', 'angular-2-template-master_1', 'app', 'plans', files.File.name);
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });
            });




    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
} catch (e) { console.log(e.stack) }

}).listen(8013);
console.log('Server running at 8013');

