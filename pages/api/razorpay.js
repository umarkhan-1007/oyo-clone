import connetDB from "@/db";
import hotelModel from "@/models/hotel-model";
import Razorpay from "razorpay"
import shortid from "shortid";




 export default async function hadler(req, res){
    if (req.method === "POST") {
        connetDB();
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const hotel = await hotelModel.findOne({_id:req.body.id})

        const amount = hotel.price;

        const options = {
            amount:(amount *100).toString(),
            currency : "INR",
            receipt: shortid.generate(),
            payment_capture: 1
        }

        try {
            const result = await razorpay.orders.create(options)
            res.status(200).json({
                id:result.id,
                currency: result.currency,
                amount: result.amount,
            })
        } catch (error) {
            console.log(error)
        }
    }
 }
