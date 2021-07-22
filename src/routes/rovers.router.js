const { Router } = require('express');
const { photosByRover, formRender } = require('../controllers/rovers.controller');

const router = Router();

router.route('/:id')
  .get(formRender)
  .post(photosByRover);

const roversRouter = router;

module.exports = roversRouter;
