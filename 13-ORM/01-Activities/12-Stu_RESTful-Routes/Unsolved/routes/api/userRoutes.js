const router = require('express').Router();
const User = require('../../models/User');

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body,
            {where: {id: req.params.id}});
            res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});
       

// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy( {
            where: {id: req.params.id}});
            res.status(200).json(deletedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
