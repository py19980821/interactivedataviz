 /* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .7,
      height = window.innerWidth * .7,
      margin = 30;

/* LOAD DATA */
d3.csv('/Users/panyue/Documents/学习/Master/Semester/SPRING2022/DATA73200/interactivedataviz/data/populationOverTime.csv', d => {
  return {
     year: new Date(+d.Year, 0, 1),
     country: d.Entity,
     population: +d.Population
  }
}).then(data => {
  console.log('data :>> ', data);

  // SCALES
  const xScale = d3.scaleTime()
     .domain(d3.extent(data, d=> d.year))
     .range([margin, width-margin])
  
  const yScale = d3.scaleLinear()
     .domain(d3.extent(data, d=> d.population))
     .range([height-margin,margin])   
  // CREATE SVG ELEMENT

  const svg = d3.select("#container")
                .append("svg")
                .attr("width", width)
                .attr("height", height)

  // BUILD AND CALL AXES

  // LINE GENERATOR FUNCTION
  const LineGen = d3.line()
          .x(d => xScale(d.year))
          .y(d => yScale(d.population))
  // DRAW LINE
  svg.selectAll("path.line")
     .data([data])
     .join("path.line")
     .attr("class", "line")
     .attr("stroke", "blue")
     .attr("fill", "none")
     .attr("d", d=>LineGen(d))

});