import mongoose from 'mongoose';
import color from 'colors'

const connectDB = async () => {
   try {
       await mongoose.connect(process.env.MONGO_URI)
        //  console.log('MongoDB Connected...');
          console.log(`MongoDB Connected to ${process.env.MONGO_URI}`.cyan.underline.bold);
   } catch (error) {
      console.error(error.message);
      process.exit(1);
   }
};

export default connectDB;
