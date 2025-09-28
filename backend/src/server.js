import { app } from "./app.js";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("mongoDB connection failed !!!",err)
})