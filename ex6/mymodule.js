
fs = require('fs')

module.exports = function(file, ext, callback){
    fs.readdir(file, functionfile = (err, list) => {
         if (err) {
              return callback(err)
             }
           regex = ('.+\.' + ext + '$')
           list= list.filter(function (el) {
        return el.match(regex)
      });
        callback(null, list);
    
    });
}