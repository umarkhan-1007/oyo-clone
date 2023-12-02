import connetDB from "@/db"
import hotelModel from "@/models/hotel-model";



export default async function handler(req, res) {
    connetDB();

    // if(req.method === "POST"){
    //     const newHotel = new hotelModel(req.body);
    //     const result = await newHotel.save();
    //     res.status(200).json({msg:'Hotel added!', result});
    // }

    if (req.method === "GET") {
        const hotels = await hotelModel.find({ location: req.query.city });
        if (hotels.length > 0) {
          return res.status(200).json({ msg: "Good", hotels });
        }
        const allhotels = await hotelModel.find({});
        return res.status(200).json({ msg: "Good", allhotels });
      }
    
}