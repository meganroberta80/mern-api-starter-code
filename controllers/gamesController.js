const router = require('express').Router();
const db = require('../models');


router.get('/', (req, res) => {
  db.Game.find({}, (err, foundGames) => {
    if (err) return console.log(err);
    
    res.send("Hit the games index route");
  });
});


router.get('/:id', (req, res) => {
  db.Game.findById(req.params.id, (err, foundGame) => {
    if (err) return console.log(err);
    
    res.send("Hit the games show route");
  });
});


router.post('/', (req, res) => {
  db.Game.create(req.body, (err, savedGame) => {
    if (err) return console.log(err);
    
    res.send("Hit the games create route");
  });
});


router.put('/:id', (req, res) => {
  db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
    if (err) return console.log(err);
    
    res.send("Hit the games update route");
  });
});


router.delete('/:id', (req, res) => {
  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) return console.log(err);

    res.send("Hit the games destroy route");
  });
});


module.exports = router;
