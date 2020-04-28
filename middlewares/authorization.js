const { Song } = require('../models')

function authorization (req, res, next) {
  let { id } = req.params

  Song.findByPk(id)
    .then(result => {
      if(result) {
        if(result.UserId == req.currentUserId) {
          next()
        } else {
          res.status(401).json({
            msg: 'unauthorized!'
          })
        }
      } else {
        res.status(404).json({
          msg: 'not found'
        })
      }
    })
}

module.exports = authorization