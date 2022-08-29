import GeraCPF from './modules/GeraCPF';

import './style.css';

(function() {
    const btn = document.querySelector('button')
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();

    btn.addEventListener('click', () => cpfGerado.innerHTML = gera.geraNovoCpf());
})();

