

const menuBtn = document.getElementById('menu');
const nav = document.querySelector('.navegação');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('ativo');
});


const dateEl = document.getElementById('date');

function mostrarDataHora() {
  const agora = new Date();
  const dataHoraFormatada = agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  dateEl.textContent = dataHoraFormatada;
}

setInterval(mostrarDataHora, 1000);

