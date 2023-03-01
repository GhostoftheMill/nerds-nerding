const router = require('express').Router;
const sequelize = require('../config/connection')
const auth = require('../utils/auth');
const { Comment, Post, User } = require('../models');

module.exports = router;