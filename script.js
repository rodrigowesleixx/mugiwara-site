const buttons = document.querySelectorAll('.show-more');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const extra = button.nextElementSibling;
        if(extra.style.display === 'none') {
            extra.style.display = 'block';
            button.textContent = 'Mostrar Menos';
        } else {
            extra.style.display = 'none';
            button.textContent = 'Mostrar Mais';
        }
    });
});
