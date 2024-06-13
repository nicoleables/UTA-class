const Driver = require('./Driver');
const License = require('./License');

// Define a Driver as having one License to create a foreign key in the `license` table
Driver.hasOne(License, {//all this is associated to the driver
  foreignKey: 'driver_id',//we have to site the foriegn key in both relationships
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
License.belongsTo(Driver, {//relationship that points to the driver from license(another layer of security)(1 to 1, one driver is allowed to have one liscense)
  foreignKey: 'driver_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Driver, License };
//you can not have the has one without the belongs to