const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    // TODO: Render template with Sequelize data
  const allUsers = await User.findAll({
    order: [['name', 'ASC']]
  })
  const users = allUsers.map((user) =>
user.get({ plain: true }))
  res.render('homepage', {users});
});

module.exports = router;
