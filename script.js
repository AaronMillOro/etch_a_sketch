const sketch = document.getElementById('sketch')
const btn = document.getElementById('new-grid')

let initialGrid = 16
createGrid(initialGrid)

btn.addEventListener('click', () => {
    do { 
        initialGrid = prompt('hit a number (less than 64)')
    } while (isNaN(initialGrid) || initialGrid > 64)
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