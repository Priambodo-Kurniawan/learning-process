const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserControllers {
  static signup (req, res) {
    let { email, password } = req.body

    User.create({
      email,
      password
    })
      .then(data => {
        res.status(201).json({
          id: data.id,
          email: data.email
        })
      })
      .catch(err => {
        res.status(500).json({
          errors: err
        })
      })
  }

  static signin (req, res) {
    let { email, password } = req.body

    User.findOne({
      where: { email }
    })
      .then(result => {
        if (result) {
          let compare = checkPassword(password, result.password)

          if (compare) {
            let token = generateToken({
              id: result.id,
              email: result.email
            })

            res.status(200).json({
              token
            })
          } else {
            res.status(401).json({
              msg: 'please login first!'
            })
          }

        } else {
          res.status(401).json({
            msg: 'please login first!'
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          errors: err
        })
      })
  }
}

module.exports = UserControllers