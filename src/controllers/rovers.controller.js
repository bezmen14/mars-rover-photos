const fetch = require('node-fetch');
const db = require('../db/models');

const formRender = async (req, res) => {
  const { id } = req.params;
  const currentRover = await db.Rover.findOne({
    where: { id },
  });
  const allCameras = await db.Camera.findAll({
    where: { roverid: id },
  });
  res.render('form', { cameras: allCameras, rover: currentRover.dataValues });
};

const photosByRover = async (req, res) => {
  const { id } = req.params;
  const currentRover = await db.Rover.findOne({
    where: { id },
  });

  const titleRover = currentRover.dataValues.title.toLowerCase();

  const { date } = req.body;
  const { camera } = req.body;

  const urlApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${titleRover}/photos?earth_date=${date}&camera=${camera}&api_key=KrYwxuhMDf1nrB0IFrPXxGgXAEJeD46iogbj7nZY`;
  const response = await fetch(urlApi);
  if (response.status === 200) {
    const allPhotos = await response.json();
    return res.render('photos', { photos: allPhotos.photos });
  }
  return res.sendStatus(500);
};

module.exports = {
  photosByRover,
  formRender,
};
