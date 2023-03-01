const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { Comment, Post, User };