document.addEventListener('DOMContentLoaded', () => {
  const sobre = document.getElementById('sobre');
  const carta = document.getElementById('carta');
  const audio = document.getElementById('magia');

  sobre.addEventListener('click', () => {
    // Reproducir el audio solo después del clic
    audio.play().catch(e => console.log('No se pudo reproducir el audio:', e));

    // Mostrar la carta
    document.body.classList.add('abierto');
  });
});

  
  // CONTADOR
const fechaEvento = new Date("April 30, 2025 21:00:00").getTime();
const elementoTiempo = document.getElementById("tiempo-restante");

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;

  if (distancia <= 0) {
    elementoTiempo.innerText = "¡Ya comenzó la fiesta! 🎉";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  elementoTiempo.innerText = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}, 1000);
