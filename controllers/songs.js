const { Song } = require('../models')

class SongController {
  static create (req, res) {
    let { title, author, year } = req.body
    let UserId = req.currentUserId

    Song.create({
      title,
      author,
      year,
      UserId
    })
      .then(result => {
        res.status(201).json({
          song: result
        })
      })
      .catch(err => {
        res.status(500).json({
          err: 'internal server error',
          err: err
        })
      })
  }

  static getAll (req, res) {
    let UserId = req.currentUserId

    Song.findAll({
      where: {
        UserId: UserId
      }
    })
      .then(songs => {
        res.status(200).json({
          songs
        })
      })
      .catch(err => {
        res.status(500).json({
          err: 'internal server error',
          err: err
        })
      })
  }
  
  static update (req, res) {
    let { id } = req.params
    let updatedSong = {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year
    }

    Song.update(updatedSong, {
      where: { id },
      returning: true
    })
      .then(result => {
        res.status(200).json({
          msg: 'song updated',
          song: result[1][0]
        })
      })
      .catch(err => {
        res.status(500).json({
          err: 'internal server error',
          err: err
        })
      })
  }
}

module.exports = SongController