import { config } from 'dotenv';
import express from 'express';
import mypaymentRoute from './routes/payment.js'
import cors from "cors"


config({path: "./config/config.env"})



export const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/getkey", (req, res) =>res.status(200).json({key:process.env.RAZORPAY_API_KEY}))




app.use("/api",mypaymentRoute)
