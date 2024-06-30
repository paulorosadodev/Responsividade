function clickMenu() {
    if (nav.style.display == 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
}