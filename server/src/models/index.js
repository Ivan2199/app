const fs = require('fs')
const path = require('path')
const {Sequelize, DataTypes} =require('sequelize')
const config = require('../config/config')
const db = {}
var __dirname = path.resolve()

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true    
  },
  password: DataTypes.STRING
})

fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js'
  )
  // .forEach((file) => {
  //   const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
  //   db[model.name] = model
  // })

db.sequelize = sequelize
db.Sequelize = Sequelize

 module.exports = db
