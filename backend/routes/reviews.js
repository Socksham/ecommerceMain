const router = require('express').Router();
let Review = require('../models/Review');

router.route('/').get((req, res) => {
  Review.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const user = req.body.user;
  const item = req.body.item;
  const text = req.body.text;
  const rating = Number(req.body.rating);
  const score = Number(req.body.score);

  const newItem = new Review({user, item, text, rating, score});

  newItem.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Review.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;