const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const userSchema = moongoose.Schema({
    fullname : String,
    email : String , 
    password : String ,
    cart : {
        type : Array,
        default : [],
    },
    isAdmin: Boolean,
    orders:{
        type : Array,
        default : [],
    },
    contact : Number,
    picture : String,
});


module.exports = mongoose.model('user',userSchema);