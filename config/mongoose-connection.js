const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose');
// $env:DEBUG="development:*"-> print
// $env:DEBUG="" -> to stop printing


mongoose
.connect(`${config.get('MONGODB_URI')}/LUXUR`)
.then(function(){
    dbgr('connected');
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;