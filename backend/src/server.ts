import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db';

dotenv.config()
connectDB();

const app = express();

app.use





app.listen(process.env.PORT,()=>{
    console.log(`server s rumming on ${process.env.PORT}succesfully`)
})