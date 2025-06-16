// Show Element
function show(text) {
    document.getElementById('display').innerText = text;
}

// Keyboard Input
document.addEventListener('keydown', function(e) {
    switch (e.key) {
      case 'ArrowUp':
        show('Up');
        break;
      case 'ArrowDown':
        show('Down');
        break;
      case 'ArrowLeft':
        show('Left');
        break;
      case 'ArrowRight':
        show('Right');
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