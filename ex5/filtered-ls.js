fs = require ('fs')
file = process.argv[2]




regex =('.+\.'+ process.argv[3] + '$')
fs.readdir(file, functionfile=(err,list)=>{
  if(err){
      console.log(err)
  }
list.filter(function(el){
    return el.match(regex)
}).forEach(el => {
    console.log(el)
    
});

})
   
