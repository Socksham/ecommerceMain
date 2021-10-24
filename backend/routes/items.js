const router = require('express').Router();
let Item = require('../models/Item');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = Number(req.body.price);
  const rating = Number(req.body.rating);
  const image = Buffer(req.body.image);

  const newItem = new Item({title, description, price, rating, image});

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;