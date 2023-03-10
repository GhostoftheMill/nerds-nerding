const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

//Get
router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User],
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('post', {comments, loggedIn: req.session.loggedIn});

    } catch (err) {
        res.status(500).json(err);
    }
});

//Create
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;