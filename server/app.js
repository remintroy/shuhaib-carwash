require('dotenv').config()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const express =require('express')
const app = express()


const adminRoutes = require('./routes/admin')

app.use(cors({

    credentials: true,
    methods: ["GET", "POST"],
    origin: true,
    origin: ["http://127.0.0.1:5173", "https://shuhaib.live"],
}))

app.use(cookieParser())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

//DB connection
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('DB CONNECTED');
}).catch((error) => {
    console.log(error.message);
})

app.use('/', adminRoutes)

//port
const port = process.env.PORT;

//starting app
app.listen(port, () => {
    console.log(`app is running in port ${port} succesfully`);
})