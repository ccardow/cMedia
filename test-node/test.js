var fs = require('fs');
var https = require('https');

//Create new file, write string inside

fs.writeFile(__dirname + "/index.html", "<h1>HTML IS GREAT</h1>", function(error) {
    if (error) {
      return console.log('oops');
    } else {
        return console.log('great news');
    }
});

// PULL FILE F|ROM INTERNET AND CREATE NEW FILE 

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/random.jpg"));

});

//run node test.js from command line to see this work 