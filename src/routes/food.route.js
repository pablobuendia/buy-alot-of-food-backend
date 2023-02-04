const router = require('express').Router();

const {
  findAll, findById, postById, updateById, deleteById,
} = require('../controllers/food.controller');

router.get('/:id', findById);
router.get('/', findAll);

router.post('/', postById);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

module.exports = router;
