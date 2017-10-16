let _open = document.getElementById('open'),
    _overlay = document.getElementById('overlay');
    
_open.addEventListener('click', function(e) {
   if (_overlay.classList.contains('appear')) {
       _overlay.classList.remove('appear');
    } else {
        _overlay.classList.add('appear');               
    }
});

document.addEventListener('click', function(close) {
    if (close.target.classList.contains('large')) {
        _overlay.classList.remove('appear');
    }
});

document.addEventListener('keyup', function(a) {
    if (a.which == 27 && _overlay.classList.contains('appear')) {
        _overlay.classList.remove('appear');
    }
});