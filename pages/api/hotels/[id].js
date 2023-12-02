import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req,res){
    try {
        if(req.method==="GET"){
            connectDB();
            if(req.query.id){
                const hotel = await Hotel.findById(req.query.id);
                res.status(200).json({msg:"Good" , hotel});
            }
        }
    } catch (error) {
        console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
    
}