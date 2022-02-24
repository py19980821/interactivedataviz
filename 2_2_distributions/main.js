/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.8,
      height = window.innerHeight * 0.8,
      margin = {top: 10, botton: 10, left: 10, right: 10};

/* LOAD DATA */
d3.json("../data/environmentRatings.json", d3.autoType)
  .then(data => {
    console.log(data)

    /* SCALES */
    const xScale = d3.scaleLinear()
       .domain([0, d3.max(data, d => d.envScore2020)])
       .range([margin.left, width - margin.right])

    const yScale = d3.scaleLinear()
       .domain([0, d3.max(data, d => d.ideologyScore2020)])
       .range([height - margin.botton, margin.top])

    /* HTML ELEMENTS */
    const svg = d3.select("#container")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
    
    //create circles via SELECT-DATA-JOIN
    svg.selectAll("circle")
       .data(data, d => d.BioID)
       .join("circle")
       .attr("cx", d => xScale(d.envScore2020))
       .attr("cy", d => yScale(d.ideologyScore2020))
       .attr("r", 5)

  });
