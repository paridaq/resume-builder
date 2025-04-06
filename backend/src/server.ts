import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
// import connectDB from './config/db';
import cors from 'cors'
import authRoute from './routes/authRoute'
import resumeRoute from './routes/resumeRoute'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { Request,Response } from 'express'

dotenv.config()
// connectDB();

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
// this code  serves public as a ststic folder and make them accessible via the browser
//app.use('/public',express.static(path.join(__dirname, "dist/controllers/public")));
app.use('/public', express.static('dist/controllers/public'))
app.use('/api/build',resumeRoute)
app.get('/',(req:Request,res:Response)=>{
    res.send('what')
})



app.listen(process.env.PORT,()=>{
    console.log(`server s running on ${process.env.PORT}succesfully`)
})
