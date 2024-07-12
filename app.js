const express=require('express')
const app=express()
const PORT=3500
const userRoute=require('./routers/userRouter')
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World"})
})
app.use('/api/v1/users',userRoute)
app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))
