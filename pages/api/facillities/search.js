import connetDB from "@/db";
import hotelModel from "@/models/hotel-model";




    export default async function handler(req, res){
        if (req.method === "GET") {
            connetDB();
            const key = req.query.val
            const hotels = await hotelModel.find({"facillities.name": {$in:key}})
            res.status(200).json({mes:"All good", hotels})
        }
    }