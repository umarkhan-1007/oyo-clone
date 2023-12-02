import connetDB from "@/db";
import hotelModel from "@/models/hotel-model";




    export default async function handler(req, res){
        if (req.method === "GET") {
            connetDB()
            const hotels = (await hotelModel.find({price:{$lte : req.query.price}}))
            return res.status(200).json({msg: "Range Filter all good", hotels});
        }
    }