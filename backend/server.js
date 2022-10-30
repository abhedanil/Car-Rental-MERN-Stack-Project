const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config()
const port =process.env.PORT || 5000;
const {errorHandler} = require('./Middleware/errorMiddleware')

const app= express();

mongoose.connect('mongodb://localhost:27017/goalDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log('DB Connected')
}).catch((err)=>{ 
    console.log(err.message) 
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/application', require('./routes/applicationRoute'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/host',require("./routes/hostRoutes"))
app.get('/api/user',((req,res)=>{
   res.json()
}))
app.use(errorHandler)

app.listen(port,() => console.log(`server started at port ${port}`))