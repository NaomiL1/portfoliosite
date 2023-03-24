function menuToggle () {
    var x = document.getElementById ('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' resonsive';
    }   else {
        x.className = 'navtoggle';
    }
}
