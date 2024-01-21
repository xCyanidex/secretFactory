import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import secretRoutes from "./routes/secretRoutes.js";
import useRoutes from "./routes/userRoutes.js";
import { errorHandler,notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB(); //connection to MongoDB

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Cookie Parser
app.use(cookieParser());




app.use('/api/secrets',secretRoutes);
app.use('/api/users', useRoutes);

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.joing(__dirname,'/frontend/build')))


    app.get('*',(req,res)=>
    res.send(path.resolve(__dirname,'frontend','build','index.html'))
    )
}else {
    app.get('/', (req, res) => {
        res.send('Api is running');
    });
}


app.use(errorHandler);
app.use(notFound)

app.listen(port, () => console.log(`Server running on port ${port}`));