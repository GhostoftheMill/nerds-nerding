const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init({
    id: {

    },
    text: {

    },
    user_id: {

    },
    date_created: {

    },
    post_id: {

    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
}
);

module.exports = Comment;