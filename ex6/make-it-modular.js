
const mymodule = require('./mymodule.js')
const callback = functionfile = (err, list) => {
    if(err){
        return console.log(err)
    }
     list.forEach(el => {
          console.log(el)
    });
}
mymodule(process.argv[2], process.argv[3], callback)