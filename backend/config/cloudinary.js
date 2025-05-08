import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

dotenv.config(); // Ensure env vars are loaded


const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
    // console.log("Cloudinary configured with cloud name:", process.env.CLOUDINARY_NAME);
    console.log("Using Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

    cloudinary.api.ping()
        .then(res => console.log("Cloudinary Ping Success:", res))
        .catch(err => console.error("Cloudinary Ping Failed:", err));


}

export default connectCloudinary;