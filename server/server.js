import { app } from "./app.js";
import Razorpay  from "razorpay"

import {connectDb} from "./config/database.connect.js"


connectDb()


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,

})


app.get("/",(req,res)=>{
    res.json({msg:"Hello World"});
})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});