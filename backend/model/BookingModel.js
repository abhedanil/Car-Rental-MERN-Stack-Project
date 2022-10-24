const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({

    carname:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'user'
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    totalDays:{
        type:Number
    },
    totalAmount:{
        type:Number
    },

},
    {timeStamps:true}
)
module.exports= mongoose.model("booking",bookingSchema)