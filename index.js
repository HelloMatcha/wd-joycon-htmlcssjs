// Show Element
function show(text) {
    document.getElementById('display').innerText = text;
}

// Button Click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-key');
      show(key);
    });
});

// Keyboard Input
document.addEventListener('keydown', function(e) {
    switch (e.key) {
      case 'ArrowUp':
        show('up');
        break;
      case 'ArrowDown':
        show('down');
        break;
      case 'ArrowLeft':
        show('left');
        break;
      case 'ArrowRight':
        show('right');
        break;
      case 'a':
      case 'A':
        show('A');
        break;
      case 'b':
      case 'B':
        show('B');
        break;
    }
});