import mongoose from "mongoose";

const connectToDB = async () => {
    
    const connectionUrl = "mongodb+srv://mustafaguzel879:karakartal1903@try.rpjsq.mongodb.net/";
    
    mongoose.connect(connectionUrl).then(() => {
        console.log("Database connection is successfull");
    })
    .catch((error) => {
        console.log(error);
    })
}

export default connectToDB;