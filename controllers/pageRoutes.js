const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
    let blogs = await Blog.findAll();
    blogs = blogs.map((blog)=> {
        return blog.get({ plain: true });
    })
    console.log(blogs);
    res.render('homepage', { blogs });
})

module.exports = router