/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.8,
      height = window.innerHeight * 0.8,
      margin = 20;

/* LOAD DATA */
d3.json("../data/environmentRatings.json", d3.autoType)
  .then(data => {
    console.log(data)

    /* SCALES */
    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.envScore2020)])
                     .range([margin, width - margin])

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.ideologyScore2020)])
                     .range([height - margin, margin])

    /* HTML ELEMENTS */
    const svg = d3.select("#container")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height)
    
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    
    //append a group
    svg.append("g")
       .attr("transform", `translate(0,${height-margin})`)
       .call(xAxis)
       
    svg.append("g")
       .attr("transform", `translate(0,${margin})`)
       .call(yAxis)

    const colorScale = d3.scaleOrdinal()
                    .domain(["R", "D", "I"])
                    .range(["red", "blue", "purple"])


    //create circles via SELECT-DATA-JOIN
    svg.selectAll("circle")
       .data(data)
       .join("circle")
       .attr("cx", d => xScale(d.envScore2020))
       .attr("cy", d => yScale(d.ideologyScore2020))
       .attr("r", 5)
       //.attr("fill", "purple")
       .attr("fill", d => colorScale(d.Party))
   

  });
