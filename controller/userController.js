const userData=require('../datas/userData')
const getAllUser=(req,res)=>{
    res.status(200).json(userData)
}
const userValidation=(req,res)=>{
    const d=userData.some(iterator=>iterator.userName===req.params.user && iterator.password===req.params.pass)
        if(d){
            return res.status(200).json({message:"Autentication Successfull"});
        }
        else{
            return res.status(404).json({message:"Failed Authentication"})
        }
}
module.exports={getAllUser,userValidation}