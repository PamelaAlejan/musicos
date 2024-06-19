import 'dotenv/config'
import express from 'express'

//rutas
import alwaysRoutes from './routes/always.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/musicos', alwaysRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('http://localhost:3000/ servidor andando...'))