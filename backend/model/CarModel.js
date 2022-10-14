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
    startdate:{
        type:Date
    },
    enddate:{
        type:Date
    },
    
}
)
module.exports= mongoose.model("car",carSchema)