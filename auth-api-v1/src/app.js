import express from 'express'
import noteRoutes from './routes/notes.routes.js'
import authRoutes from './routes/users.routes.js'
import cookieParser from "cookie-parser";

let app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/notes", noteRoutes)
app.use('/api/auth', authRoutes)

export default app