import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import productRouter from "./src/router/pRouter.js"
import cors from "cors"
const port = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(cors())

app.use("/product", productRouter)

app.get("/",(req, res)=>{
    res.send("Many")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})