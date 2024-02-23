const sketch = document.getElementById('sketch')
const btn = document.getElementById('new-grid')

let initialGrid = 16
createGrid(initialGrid)

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
