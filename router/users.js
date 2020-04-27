const router = require('express').Router()
const userControllers = require('../controllers/users')

router.post('/signup', userControllers.signup)
router.post('/signin', userControllers.signin)

module.exports = router