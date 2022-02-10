import Personajes from './Consulta.js';

document.getElementById('buttonImages').addEventListener('click', async () => {
  const { personajes } = await Personajes.getData();
  console.log(personajes);
  const pj = document.getElementById('nombre').value;
  const imagenesPjTemplate = personajes
    .find((p) => p.name == pj)
    .imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
    .join('');

  document.getElementsByClassName('personajes')[0].innerHTML =
    imagenesPjTemplate;

  document.querySelectorAll('.personajes img').forEach((i) => {
    i.addEventListener('click', (e) => {
      $('#imagenModal').modal('toggle');
      const imagenSrc = e.target.src;
      document.getElementById(
        'preview'
      ).style.backgroundImage = `url(${imagenSrc})`;
    });
  });
});

// <img src="https://static.wikia.nocookie.net/dragonball/images/c/c0/Son_Goku_en_Super_Hero.png/revision/latest?cb=20220119160009&path-prefix=es" alt="kame" />
