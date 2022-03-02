/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = window.innerHeight *.8;


/* LOAD DATA */
d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(data => {
  console.log("data", data)

  /* SCALES */
  // xscale - categorical, activity
  const yScale = d3.scaleBand()
                   .domain(data.map(d=> d.activity))
                   .range([0, height])
                   .paddingInner(.1);
                  
                    // visual variable
    

    // yscale - linear,count
  const xScale = d3.scaleLinear()
                   .domain([0, 1500])
                   .range([0, width])
    
  /* HTML ELEMENTS */
  // svg
  const svg = d3.select("#container")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                

  // bars
  svg.selectAll("rect")
     .data(data)
     .join("rect")
     .attr("class", "bar")
     .attr("height", yScale.bandwidth())
     .attr("width", d=> xScale(d.count))
     .attr("x", xScale(0))
     .attr("y", d=> yScale(d.activity))
     .attr("fill", "#69b3a2")

  })