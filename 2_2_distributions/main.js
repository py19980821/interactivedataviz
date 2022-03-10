/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.8,
      height = window.innerHeight * 0.8,
      margin = {top : 10, bottom : 20, left : 50, right : 10};


/* LOAD DATA */
d3.csv("../data/population_2016.csv", d3.autoType)
  .then(data => {
    console.log("data", data)

    /* SCALES */
const xScale = d3.scaleLinear()
                 .domain([0, d3.max(data, d => d.pct_BAdeg)])
                 .range([margin.left, width - margin.right])

const yScale = d3.scaleLinear()
                 .domain([0, d3.max(data, d => d.medinc16)])
                 .range([height - margin.top, margin.bottom])
    /* HTML ELEMENTS */
const svg = d3.select("#container")
              .append("svg")
              .attr("width", width)
              .attr("height", height)

const xAxis = d3.axisBottom(xScale)
const yAxis = d3.axisLeft(yScale)

//append a group

svg.append("g")
   .attr("transform", `translate(0, ${height - margin.bottom})`)
   .call(xAxis);


svg.append("g")
   .attr("transform", `translate(${margin.left}, 0)`)
   .call(yAxis);

const colorScale = d3.scaleOrdinal()
                     .domain(["Suburban", "Urban", "Rural"])
                     .range(["red", "blue", "purple"])

const sizeScale = d3.scaleOrdinal()
                    .domain(["Suburban", "Urban", "Rural"])
                    .range(["2", "1", "3"])

                      


//create circles via SELECT-DATA-JOIN
const dot = svg.selectAll("circle")
               .data(data, d => d.id)
               .join("circle")
               .attr("cx", d => xScale(d.pct_BAdeg))
               .attr("cy", d => yScale(d.medinc16))
               .attr("r", d => sizeScale(d.urban_class))
               .attr("fill", d => colorScale(d.urban_class))
               
  });
