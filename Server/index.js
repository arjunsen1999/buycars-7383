require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const {connection} = require("./config/db");

// all routes
const {authRouter} = require('./routes/Auth.routes');
const {OEM_SpecsRouter} = require("./routes/OEM_Specs.routes");

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/oem", OEM_SpecsRouter);



app.listen(PORT, () =>{
    connection();
    console.log({server : `http://localhost:${PORT}`});
})