const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {//We search the DB for a user with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {//The error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,//password that has been hashed outside the database
      userData.password//password that has already been hashed in data base and validate it true or false
    );//bcrypt will keep your password secure but if you know your password you can put in your password and it will
    //hash it the same way as before(it will give you the same hash)
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;//this is validating the password it is wrong and does not match it will be login failed status 400
    }
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {//This is validating the password it is correct and say you are logged in status 500
    res.status(500).json(err);
  }
});

module.exports = router;
