const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
};

seedDatabase();
