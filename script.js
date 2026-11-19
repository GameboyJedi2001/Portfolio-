// Menu móvel: alterna a lista de links e mantém o estado acessível.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// A preferência de tema fica salva no navegador para a próxima visita.
const themeButton = document.querySelector('#theme-toggle');
if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Valida campos e formato do e-mail; o envio é simulado, sem servidor.
const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message) {
    feedback.textContent = 'Preencha seu nome, e-mail e mensagem.';
    return;
  }
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Confira o formato do e-mail e tente novamente.';
    form.elements.email.focus();
    return;
  }
  form.reset();
  feedback.textContent = 'Mensagem enviada com sucesso! (simulação)';
});
