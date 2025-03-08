import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db';
import cors from 'cors'
import authRoute from './routes/authRoute'

dotenv.config()
connectDB();

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/api/auth',authRoute)




app.listen(process.env.PORT,()=>{
    console.log(`server s running on ${process.env.PORT}succesfully`)
})