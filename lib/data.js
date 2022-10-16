// dependencies
const fs =  require('fs')
const path = require('path')

const lib = {}

lib.basedir = path.join(__dirname, '/../data/')

// write data to file
lib.create = function(dir, file, data, callback){
    // open file for writing
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', function(err, fileDescriptor){
        if(!err &&  fileDescriptor){

        }else{
            callback("Could not create new file, it's may already exists")
        }
    })
}