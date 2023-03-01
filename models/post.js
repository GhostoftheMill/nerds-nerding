const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init({
    id: {

    },
    title: {

    },
    text: {

    },
    user_id: {

    },
    date_created: {

    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
}
);

module.exports = Post;