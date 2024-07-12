const fs=require('fs')
const filepath="./middlewares/logger.txt"
const checkLogger=(req,res,next)=>{
    fs.appendFileSync(filepath,"User Logged Data\n","utf8")
    fs.appendFileSync(filepath,`Username = ${req.params.user}\nPassword = ${req.params.pass}\n`,'utf8')
    fs.appendFileSync(filepath,`URL = ${req.originalUrl}\n`,'utf8')
    fs.appendFileSync(filepath,`Date = ${new Date()}\n`,'utf8')
    fs.appendFileSync(filepath,`Method = ${req.method}\n\n`,'utf8')
    next()
}
module.exports={checkLogger}