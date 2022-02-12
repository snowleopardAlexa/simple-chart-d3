const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 20, region: 'India'},
    { id: 'd3', value: 30, region: 'China'},
    { id: 'd4', value: 40, region: 'Switzerland'},
];


const container = d3.select('svg')
  .classed('container', true)

  const bars = container
     .selectAll('.bar')
     // bind our data
     .data(DUMMY_DATA)
     .enter()
     // append for evey missing element
     .append('rect')
     .classed('bar', true)
     .attr('width', 50)
     .attr('height', data => (data.value * 10));
