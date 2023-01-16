import { Router } from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import { register, login, logout, extend, getUser, editCart, getCart } from '../controllers/users.js'

const router = Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.patch('/extend', auth.jwt, extend)
router.get('/me', auth.jwt, getUser)
router.post('/cart', content('application/json'), auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)

// -extend 拿過期的 jwt換新的jwt

router.get('/me', auth.jwt, getUser)
// -取得自己的資料

export default router
