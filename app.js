const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'China'},
    { id: 'd4', value: 6, region: 'Switzerland'},
];

// scaling functions x axis
const xScale = d3
.scaleBand()
.domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
.rangeRound([0, 250])
.padding(0.1);

// scaling function y axis
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg').classed('container', true);

  const bars = container
     .selectAll('.bar')
     // bind our data
     .data(DUMMY_DATA)
     .enter()
     // append for evey missing element
     .append('rect')
     .classed('bar', true)
     .attr('width', xScale.bandwidth())
     .attr('height', (data) => 200 - yScale(data.value))
     .attr('x', data => xScale(data.region))
     .atrr('y', data => yScale(data.value));
      

  setTimeout(() => {
     bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
  }, 2000);
     
