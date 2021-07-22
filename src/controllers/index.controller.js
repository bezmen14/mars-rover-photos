const db = require('../db/models');

const indexPageRender = async (req, res) => {
  const allRovers = await db.Rover.findAll();
  res.render('index', { rovers: allRovers });
};
module.exports = {
  indexPageRender,
};
