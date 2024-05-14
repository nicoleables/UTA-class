const router = require('express').Router();
const Book = require('../../models/Book');

// Change the anonymous callback function to become Asynchronous
router.get('/', async (req, res) => {//we cant not use awaite unless we establush our function as async
  // Store the bookData in a variable once the promise is resolved.
  const bookData = await Book.findAll();//awaite must come with async(this is removing the purpose of the .then)
//When findAll method is run it emeditly returns to you giving you a promise saying it will return the info later(instead of that with awaite we dont want the promise were just going to wait for it then move on)
  // Return the bookData promise inside of the JSON response
  return res.json(bookData);
});

router.post('/', async (req, res) => {
  const bookData = await Book.create(req.body);

  return res.json(bookData);
});

router.get('/paperbacks', async (req, res) => {
  const bookData = await Book.findAll({
    order: ['title'],
    where: {
      is_paperback: true,
    },
    attributes: {
      exclude: ['is_paperback', 'edition'],
    },
  });

  return res.json(bookData);
});

router.get('/:id', async (req, res) => {
  const bookData = await Book.findByPk(req.params.id);

  return res.json(bookData);
});

router.post('/', async (req, res) => {
  const bookData = await Book.create(req.body);

  return res.json(bookData);
});

router.put('/:book_id', async (req, res) => {
  const bookData = await Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      where: {
        book_id: req.params.book_id,
      },
    }
  );

  return res.json(bookData);
});

router.delete('/:book_id', async (req, res) => {
  const bookData = await Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  });

  return res.json(bookData);
});

module.exports = router;
