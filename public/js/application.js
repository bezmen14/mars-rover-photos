console.log('work');

const urlApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=KrYwxuhMDf1nrB0IFrPXxGgXAEJeD46iogbj7nZY';
// const urlApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KrYwxuhMDf1nrB0IFrPXxGgXAEJeD46iogbj7nZY';

const $img = document.querySelector('img');

async function getPhoto() {
  const response = await fetch(urlApi);
  const dataFromNasa = await response.json();
  console.log(dataFromNasa);
  const urlPhoto = dataFromNasa.photos[0].img_src;

  $img.src = urlPhoto;
}

getPhoto();
