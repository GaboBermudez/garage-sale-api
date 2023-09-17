import express from 'express'
import { comprarHandler, comprasHandler } from '../handlers/compras.handlers.js'

const router = express.Router()

router.post('/comprar', comprarHandler)
router.get('/compras', comprasHandler)

export default router
