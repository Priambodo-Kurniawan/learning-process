const router = require('express').Router()
const songController = require('../controllers/songs')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', songController.create)
router.get('/', songController.getAll)

router.put('/:id', authorization, songController.update)

module.exports = router