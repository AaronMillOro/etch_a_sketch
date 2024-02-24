const sketch = document.getElementById('sketch')
const btn = document.getElementById('new-grid')
let initialGrid = 16

createGrid(initialGrid)

window.onresize = () => {
    const currentGrid = document.querySelectorAll('.pixel')
    sketch.innerHTML = '' // reset grid
    createGrid(currentGrid.length ** 0.5)
}

btn.addEventListener('click', () => {
    do { 
        initialGrid = prompt('Hit a number (from 1 to 100)')
    } while (isNaN(initialGrid) || initialGrid > 100 || initialGrid <= 0)
    sketch.innerHTML = '' // reset grid
    createGrid(initialGrid)
})

function createGrid(nbPixels){
    const fragment =  document.createDocumentFragment()
    // to get a squared grid
    for (let y = 1; y <= nbPixels * nbPixels; y++){
        const pixel = createPixel(nbPixels)
        fragment.appendChild(pixel)
    }
    sketch.appendChild(fragment)
}

function setRandomValue(){
    return Math.floor(Math.random() * 255)
}

function createPixel(nbPixels){
    // the number of pixel is to claculate the width and height in function of the  size of the sketch zone
    const pixel = document.createElement('div')
    pixel.style['width'] = Math.floor(sketch.offsetWidth/nbPixels)+'px'
    pixel.style['height'] = Math.floor(sketch.offsetHeight/nbPixels)+'px'
    pixel.classList.add('pixel')
    pixel.style['cursor'] = 'grab'
    pixel.addEventListener('mouseover', () => {
        if(isNaN(pixel.style['background-color'])){
            const color = pixel.style['background-color']
            intensityColorDarkness(color)
        } else {
            pixel.style['background-color'] = `rgba(${setRandomValue()}, ${setRandomValue()}, ${setRandomValue()}, 0.1)`
        }
    })
    return pixel
}

function intensityColorDarkness(color){
    if (!color.includes('0.9')){
        let darkness = +color.split(', ')[3].slice(0,3)
        if (darkness < 1){ 
            darkness += 0.1
            const nextColor =  color.substring(0, color.length-4) + darkness.toFixed(1) + ')'
            pixel.style['background-color'] = nextColor
        }
    }
}
