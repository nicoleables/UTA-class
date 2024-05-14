const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  //When a reader is deleted it will automatily delete the associated library card
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
//It is exporting both the reader and the librarycard so that it is part of our models package that were deliverying and it is also name safe
module.exports = { Reader, LibraryCard };
