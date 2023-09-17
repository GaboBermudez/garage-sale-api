import cors from 'cors'
import express from 'express'
import comprasRoutes from './routes/compras.routes.js'

const app = express()

app.use(cors())

// Middleware
app.use(express.json())

app.use(comprasRoutes)

app.use((req, res) => {
  res.status(404).json({
    message: '404 not found',
  })
})

export default app
