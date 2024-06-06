const router = require('express').Router();
const Dish = require('../models/Dish');

// ! Get one dish without serializing data
router.get('/dish/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);//getting data back
    console.log(dishData);//logging it
    res.render('dish', dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ! Get one dish with serialized data
// router.get('/dish/:id', async (req, res) => {
//   try {
//   // Search the database for a dish with an id that matches params
//   const dishData = await Dish.findByPk(req.params.id);//this is being done on a single dish bc of the find by pk
//   console.log(dishData)
//   // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need.
//   const dish = dishData.get({ plain: true });
//   // Then, the 'dish' template is rendered and dish is passed into the template.
//   res.render('dish', dish);//the serialization step is happening here (the second dish is not wrapped in curly brackets to clean it up and making it easier to send back)
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

module.exports = router;
//serialized is getting just what you need
