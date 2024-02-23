# Etch a sketch

A browser version of something between a sketchpad and an Etch-A-Sketch.

## Details

- The starting webpage is a 16x16 grid of square sections. 

- Each section change color when hovering over them, leaving a (pixelated) trail through the grid like a pen would. 

- A button on top of the screen will asking for the number of squares per side of a new grid. Once entered, the existing grid is removed and a new grid will be generated in the same total space as before. The limit for the user input is set to a maximum of 64.

- Each interaction will randomize the square’s RGB value.

- Additionally, there is a progressive darkening effect where each interaction adds 10% more color to the square. The objective is to achieve a completely black/color square only after ten interactions.
