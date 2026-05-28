import express from 'express'
import noteRoutes from './routes/notes.routes.js'
import authRoutes from './routes/users.routes.js'

let app = express()
app.use(express.json())

app.use("/api/notes", noteRoutes)
app.use('/api/auth', authRoutes)

export default app