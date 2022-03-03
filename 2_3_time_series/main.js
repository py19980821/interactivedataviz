 /* CONSTANTS AND GLOBALS */
const width = window.inerWidth * .7,
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

  // CREATE SVG ELEMENT

  // BUILD AND CALL AXES

  // LINE GENERATOR FUNCTION

  // DRAW LINE

});