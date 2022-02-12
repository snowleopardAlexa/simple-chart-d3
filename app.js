const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 20, region: 'India'},
    { id: 'd3', value: 30, region: 'China'},
    { id: 'd4', value: 40, region: 'Switzerland'},
];


const container = d3.select('div')
  .classed('container', true)
  .style('border', '2px solid green');

  const bars = container
     .selectAll('.bar')
     // bind our data
     .data(DUMMY_DATA)
     .enter()
     // append for evey missing element
     .append('div')
     .classed('bar', true)
     .style('width', '50px')
     .style('height', data => (data.value * 15) + 'px');
