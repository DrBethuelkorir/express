import { alldata } from './Models/models.js';

import express from 'express'
import connectDB from './DB/ConnectorDb.js';
const app = express()
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";
connectDB(DATABASE_URL)

// insermany()
alldata()
 


app.listen(port, () => {
console.log(`server up on port ${port}`)
})