const { Router } = require('express');
const { indexPageRender } = require('../controllers/index.controller');

const router = Router();

router.route('/')
  .get(indexPageRender);

const indexRouter = router;

module.exports = indexRouter;
