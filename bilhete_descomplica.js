var elementosDuv = document.querySelectorAll('.duv')


elementosDuv.forEach(function(duv){
    duv.addEventListener('click', function(){
        duv.classList.toggle('ativa')
    })
    })


function menuShow() {
    let menuMonile = document.querySelector('.mobile-menu')
    if(menuMonile.classList.contains('open')) {
        menuMonile.classList.remove('open');
        document.querySelector('.icon').src = .
    } else {
        menuMonile.classList.add('open')
    }
}

