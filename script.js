const sketch = document.getElementById('sketch')
const btn = document.getElementById('new-grid')
let initialGrid = 16

window.onresize = () => { location.reload()}

createGrid(initialGrid)

btn.addEventListener('click', () => {
    do { 
        initialGrid = prompt('Hit a number (from 1 to 100)')
    } while (isNaN(initialGrid) || initialGrid > 100 || initialGrid <= 0)
    resetGrid()
    createGrid(initialGrid)
})

function createGrid(nbPixels){
    for (let y = 1; y <= nbPixels; y++){
        for (let x = 1; x <= nbPixels; x++){
            const pixel = document.createElement('div')

            pixel.style['width'] = Math.floor(sketch.offsetWidth/nbPixels)+'px'
            pixel.style['height'] = Math.floor(sketch.offsetHeight/nbPixels)+'px'
            pixel.classList.add('pixel')
            pixel.style['cursor'] = 'grab'
            pixel.addEventListener('mouseover', () => {
                if(isNaN(pixel.style['background-color'])){
                    const color = pixel.style['background-color']
                    if (!color.includes('0.9')){
                        let darkness = +color.split(', ')[3].slice(0,3)
                        if (darkness < 1){ 
                            darkness += 0.1
                            const nextColor =  color.substring(0, color.length-4) + darkness.toFixed(1) + ')'
                            pixel.style['background-color'] = nextColor
                        }
                    }
                } else {
                    pixel.style['background-color'] = `rgba(${setRandomValue()}, ${setRandomValue()}, ${setRandomValue()}, 0.1)`
                }
            })
            sketch.appendChild(pixel)
        }
    }
}

function resetGrid(){
    const pixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < pixels.length; i++){
        sketch.removeChild(pixels[i])
    }
}

function setRandomValue(){
    return Math.floor(Math.random() * 255)
}