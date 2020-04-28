const router = require('express').Router()
const userRouter = require('./users')
const songRouter = require('./songs')

router.use('/users', userRouter)
router.use('/songs', songRouter)

module.exports = router