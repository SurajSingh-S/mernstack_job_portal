import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfullly');
    }
    catch(error){

    }
}

export default connectDB;