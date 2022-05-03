import express from 'express';
import dotenv from 'dotenv';
// import colors from colors;


import mongoDB from './config/db_config.js';
import WishListRouter from './routes/whistlistRoute.js'

dotenv.config();
mongoDB();

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/wishlist', WishListRouter);

app.listen(PORT, () => {
    console.log(`🚀Server listening on port ${PORT}`);
});