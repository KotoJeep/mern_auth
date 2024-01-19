import express, {urlencoded} from 'express'
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";


dotenv.config()

const port = process.env.PORT || 8000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('server is ready'))

app.use(notFound)
app.use(errorHandler)
app.listen(port, () => console.log(`server started at ${port}`))

