const router = require('express').Router();
let Item = require('../models/Item');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title.toLowerCase();
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


router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        item.title = req.body.title.toLowerCase();
        item.description = req.body.description;
        item.price = Number(req.body.price);
        item.rating = Number(req.body.rating);
        item.image = Buffer(req.body.image);
      
        item.save()
          .then(() => res.json('Item updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/:word').get((req, res) => {
    var word = req.params.word.toLowerCase();
    Item.find({title : {$regex: req.params.word}})
      .then(items => res.json(items))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;