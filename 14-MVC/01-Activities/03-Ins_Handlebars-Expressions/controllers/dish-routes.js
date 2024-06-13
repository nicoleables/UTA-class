const router = require('express').Router();
// ? Here is where we provide hardcoded data to render dynamically
const dishes = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
  },
  {
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanish Chorizo',
  },
  {
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalapeños and cilantro, pickled red onion',
  },
  {
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    dish_name: 'Pork Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling',
  },
  {
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
  },
  {
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegetable curry dish with basmati rice',
  },
];

//get all dishes
router.get('/', async (req, res) => {
  res.render('all');//render will fit everything together and display and reander a page based on what its given
});

//get one dish
router.get('/dish/:num', async (req, res) => {
  // ? This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render('dish', dishes[req.params.num - 1]);//You will have to do this a lot to translate what the user sees from you arrays are 0 based so for it to start at 1 for the user we have to do -1(it depends how tohe logic is set up sometimes)
});

module.exports = router;
