const db = require('../models');

// GET
exports.getIdeas = async function(req, res, next) {
  try {
    let ideas = await db.Idea.find().sort({ createdAt: 'desc' });
    return res.status(200).json(ideas);
  } catch (err) {
    return next(err);
  }
};

// CREATE
exports.createIdea = async function(req, res, next) {
  try {
    let newIdea = await db.Idea.create(req.body);
    return res.status(200).json(newIdea);
  } catch (err) {
    return next(err);
  }
};

// UPDATE
exports.updateIdea = async function(req, res, next) {
  try {
    let updatedIdea = await db.Idea.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedIdea);
  } catch (err) {
    return next(err);
  }
};

// DELETE
exports.deleteIdea = async function(req, res, next) {
  try {
    let deletedIdea = await db.Idea.findById(req.params.id);
    await deletedIdea.remove();
    return res
      .status(200)
      .json({ message: `Idea (id: ${deletedIdea._id}) deleted.` });
  } catch (err) {
    return next(err);
  }
};
