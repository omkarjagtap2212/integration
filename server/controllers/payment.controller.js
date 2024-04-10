

// import { instance } from "../server.js"




// export const checkOut = async (req, res) => {

//     const options = {
//         amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
//         currency: "INR",
//         receipt: "order_rcptid_11"
//     };
//     const order = await instance.orders.create(options);

//     res.status(200).json({
//         success: true,
//         order: order

//     })


// }

// export const paymentVerification = async (req, res) => {
//     console.log(req.body)

//     let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
//     var crypto = require("crypto");
//     var expectedSignature = crypto.createHmac('sha256', '<YOUR_API_SECRET>')
//         .update(body.toString())
//         .digest('hex');
//         console.log("sig received", req.body.response.razorpay_signature);
//         console.log("sig generated", expectedSignature);
//         var response = {"signatureIsValid": "false"}
// }
// if (expectedSignature === req.body.response.razorpay_signature)

//     response = { "signatureIsValid": "true" }
//     res.send(response);



// res.status(200).json({
//     success: true,
// })


// // 


import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";



export const checkOut = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
        success: true,
        order: order
    });
}

export const paymentVerification = async (req, res) => {
    // console.log(req.body);

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');

        const isAuthentications= expectedSignature===razorpay_signature

        if(isAuthentications){
            //connect the databased 
            await Payment.create({
                razorpay_order_id, 
                razorpay_payment_id,
                 razorpay_signature
            })


          return   res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)

          

        }
        else{
         return   res.status(200).json({
                success: false,
            })

        }


  


}
