function ToggleMode() {
    const html = document.documentElement
    // pegar a tag img e substituir a imagem
    const img = document.querySelector('#profile img')
    if (html.classList.contains('light')){
        // se tiver light, vai para o modo dark
        html.classList.remove('light')
        img.setAttribute('src', './assets/assets/cat_dark.png')
    } else {
        // se nao tiver, vai para o modo light
        html.classList.add('light')
        img.setAttribute('src', './assets/assets/cat_light.png')
    }
}