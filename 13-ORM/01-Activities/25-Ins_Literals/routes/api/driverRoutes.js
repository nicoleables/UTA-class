const router = require('express').Router();
const sequelize = require('../../config/connection');//import connection
const { Driver, License, Car } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const driverData = await Driver.findAll({
      include: [{ model: License }, { model: Car }],
      attributes: {
        include: [//whats included
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(//This is out literal query(this extents the cababilities of seqalize)
              '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'//we dont want to have data inside our database that can be calculator be other data
            ),
            'totalMileage',//to save space having it here instead of ot in the line above
          ],
        ],
      },
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.get('/:id', async (req, res) => {
  try {
    const driverData = await Driver.findByPk(req.params.id, {
      include: [{ model: License }, { model: Car }],
      attributes: {
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
            ),
            'totalMileage',
          ],
        ],
      },
    });

    if (!driverData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
