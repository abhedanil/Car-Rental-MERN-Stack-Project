const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true,'Please add a name'] 
   },
   email: {
    type: String,
    required :[true,'Please add an email']
   },
   password : {
    type:String,
    required:[true,'Please add a password']
   },
   blocked:{
    type:Boolean,
    default:false
   },
   isHost:{
    type:Boolean,
    default:false
   },
   isAdmin:{
    type:Boolean,
    default:false
   },
},
{
    timestamps:true
}
)
module.exports = mongoose.model('user',userSchema)