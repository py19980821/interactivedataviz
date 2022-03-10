/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.9,
      height = window.innerHeight * 0.7,
      margin = { top: 20, bottom: 50, left: 60, right: 40 };

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../data/usState.json"),
  d3.csv("../data/stateCapitals.csv", d3.autoType),
]).then(([geojson, capitals]) => {
  
  // SPECIFY PROJECTION
 const projection = d3.geoAlbersUsa()
   .fitSize([width - margin.left - margin.right, height - margin.top - margin.bottom], geojson)

  // CREATE SVG ELEMENT
 const svg = d3.select("#container") 
               .append("svg")
               .attr("width", width)
               .attr("height", height)
  
  // DEFINE PATH FUNCTION
const pathGen = d3.geoPath(projection)

  // APPEND GEOJSON PATH  
const states = svg.selectAll("path")
                  .data(geojson.features)
                  .join("path")
                  .attr("d", d => pathGen(d))
                  .attr("fill", "magenta")
                  .attr("stroke", "black")


svg.selectAll("circle")
   .data(capitals)
   .join("circle")
   .attr("r", 2)
   .attr("fill", "gold")
   .attr("transform", d => {
     const [x, y] = projection([d.longitude, d.latitude]) // create x,y to our circle based on our projection
     return `translate(${x}, ${y})`
   })
  
  // APPEND DATA AS SHAPE

});