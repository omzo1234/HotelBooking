import User from "../models/User.js";
import { Webhook } from "svix";


const clerkWebhooks = async (req, res) => {
    try {

        //Create a svix webhook instance
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    
        const headers ={
    
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
};

        //verifying headers
        await whook.verify(JSON.stringify(req.body), headers);

        //Getting data from the request body
        const {data, type} = req.body;

        const userData = {
            _id : data.id,
            email : data.email_addresses[0].email_address,
            username : data.firt_name + " " + data.last_name,
            image : data.image_url,
        }
        
        //Switch case for different types of events
        switch (type) {
            case "user.created":{
                //Create a new user
                await User.create(userData)
                break;
            }
            case "user.updated  ":{
                //Update a new user
                await User.findByIdAndUpdate(data.id, userData)
                break;
            }
            
             case "user.deleted  ":{
                //Update a new user
                await User.findByIdAndDelete(data.id)
                break;
            }
            default:
                break;
        }

        res.JSON({success: true, message: "Webhook received"});
        
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({success: false, message: error.message});
        
    }
}

export default clerkWebhooks;
