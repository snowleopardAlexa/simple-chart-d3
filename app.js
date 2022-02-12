const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 20, region: 'India'},
    { id: 'd3', value: 30, region: 'China'},
    { id: 'd4', value: 40, region: 'Switzerland'},
];


d3.select('div')
  .selectAll('p')
  // bind data to paragraphs
  .data([1,2,3,4,5,6,7,8])
  // tell me which paragraphs are missing
  .enter()
  // add missing paragraphs to missing div
  .append('p')
  .text(dta => dta);
