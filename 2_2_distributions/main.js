/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.8,
      height = window.innerHeight * 0.8,
      margin = 20;


/* LOAD DATA */
d3.csv("/Users/panyue/Documents/学习/Master/Semester/SPRING2022/DATA73200/interactivedataviz/data/population_2016.csv", d3.autoType)
  .then(data => {
    console.log("data", data)

    /* SCALES */
const xScale = d3.scaleLinear()
                 .domain([0, d3.max(data, d => d.pct_BAdeg)])
                 .range([margin, width - margin])

const yScale = d3.scaleLinear()
                 .domain([0, d3.max(data, d => d.medinc16)])
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
   .attr("transform", `translate(0,${height - margin})`)
   .call(xAxis);


svg.append("g")
   .attr("transform", `translate(${margin},0)`)
   .call(yAxis);

const colorScale = d3.scaleOrdinal()
                     .domain(["Suburban", "Urban", "Rural"])
                     .range(["red", "blue", "purple"])


//create circles via SELECT-DATA-JOIN
const dot = svg.selectAll("circle")
               .data("data", d => d.id)
               .join("circle")
               .attr("cx", d => xScale(d.pct_BAdeg))
               .attr("cy", d => yScale(d.medinc16))
               .attr("r", 5)
               .attr("fill", d => colorScale(d.urban_class))
  });
