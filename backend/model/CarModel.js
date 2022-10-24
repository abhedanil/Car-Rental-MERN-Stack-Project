const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    OwnerName:{
        type:String,
        ref:'user'
    },
    carname:{
        type:String,
        required:[true, 'Please add car name']
    },
    companyName:{
        type:String
    },
    cartype:{
        type:String,
        required:[true,'Please add cartype']
    },
    seatCapacity:{
        type:String,
    },
    fueltype:{
        type:String
    },
    transmission:{
        type:String
    },
    yom:{
        type:String
    },
    carimage:{
        type:String
    },
    RCimage:{
        type:String
    },
    location:{
        type:String
    },  
    district:{
        type:String
    },
    rentPerDay:{
        type:String
    }
 
    
}
)
module.exports= mongoose.model("car",carSchema)