import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './configs/db.js';


connectDB()
const app = express()
app.use(cors()) //enable our app to connect on other front
app.get('/' , (req, res) => res.send("API is working fine"))

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Listen on ${PORT}`));