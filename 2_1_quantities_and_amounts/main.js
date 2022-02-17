/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.08;
const height = window.innerHeight / 3;

/* LOAD DATA */
d3.csv('../data/squirrelActivities.csv', d3.autoType)
  .then(data => {
    console.log("data", data)

    /* SCALES */
    /** This is where you should define your scales from data to pixel space */
    const xScale = d3.scaleBand()
    .domain(data.map(d => d.activity))
    .range([0,width])
    const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([height, 0])
    /* HTML ELEMENTS */
    /** Select your container and append the visual elements to it */

  })