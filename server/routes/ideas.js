const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  getIdeas,
  createIdea,
  updateIdea,
  deleteIdea
} = require('../handlers/ideas');

router
  .route('/')
  .get(getIdeas)
  .post(createIdea);

router
  .route('/:id')
  .put(updateIdea)
  .delete(deleteIdea);

module.exports = router;
