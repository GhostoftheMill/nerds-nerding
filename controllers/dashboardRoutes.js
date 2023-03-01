const router = require('express').Router;
const sequelize = require('../config/connection')
const auth = require('../utils/auth');
const { Comment, Post, User } = require('../models');

router.get('/', async (req, res) => {
    let posts = await Post.findAll();
    posts = posts.map((post)=> {
        return post.get({ plain: true });
    })
    console.log(posts);
    res.render('homepage', { posts });
});



module.exports = router;