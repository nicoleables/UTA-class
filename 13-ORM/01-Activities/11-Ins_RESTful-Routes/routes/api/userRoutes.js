const router = require('express').Router();
const User = require('../../models/User');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => {//error handling for this operation(it will catch any errors that happen with the findAll)
    res.json(err);
  });
  res.json(userData);
});

// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);//for create
    // 200 status code means the request is successful
    res.status(200).json(userData);//if this gets sent back everything was successfull
  } catch (err) {//handlings errors
    // 400 status code means the server could not understand the request
    res.status(400).json(err);//If this gets sent back it will be a error(the clients fault not the server fault)
  }
});

module.exports = router;
