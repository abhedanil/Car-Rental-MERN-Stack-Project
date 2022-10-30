const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    firstname:{
        type:String,
        required:[true,'Please add a name ']
    },
    lastname:{
        type:String,
        required:[true,'Please add last name'],
  
    },
    email:{
        type: String,
        required:true,
        // unique:true
    },
    phone:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    idproof:{
        type:String
    },
    IdImage:{
        type:String
    },
    userImage:{
        type:String
    }
     
},  
{
    timestamps:true
}
)
module.exports = mongoose.model('ApplyForm',applicationSchema) 