
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    toggleProjetos();
    toggleTextoBotao();
});

function toggleProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.toggle('ativo');
    });
}

function toggleTextoBotao() {
    if (botaoMostrarProjetos.textContent === 'Mostrar mais') {
        botaoMostrarProjetos.textContent = 'Mostrar menos';
    } else {
        botaoMostrarProjetos.textContent = 'Mostrar mais';
    }
}
