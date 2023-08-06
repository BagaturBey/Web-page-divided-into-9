const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', () => {
        square.classList.toggle('expanded');
        squares.forEach(s => {
            if (s !== square && s.classList.contains('expanded')) {
                s.classList.remove('expanded');
            }
        });
    });
});
