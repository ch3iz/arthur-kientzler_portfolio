document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('.icon');
    const page = document.querySelector('.page');
    const header = document.querySelector('header')
    const home = document.querySelector('.home')
    const bouton = document.querySelector('button')
    const bouton2 = document.querySelector('.bouton>nth-child(2)')

    icon.addEventListener('click', function() {
        icon.classList.toggle('nuit');
        icon.classList.toggle('jour');
        if (icon.classList.contains('jour')) {
            header.classList.add('clair')
            page.classList.add('clair');
            home.classList.add('clair')
            bouton.classList.add('clair')
        } else {
            page.classList.remove('clair');
            header.classList.remove('clair')
            home.classList.remove('clair')
            bouton.classList.remove('clair')
        }
    });

    // Vérifier l'état initial de l'icône pour définir l'état de la page
    if (icon.classList.contains('jour')) {
        page.classList.add('clair');
    } else {
        page.classList.remove('clair');
    }
});