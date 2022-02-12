d3.select('div')
  .selectAll('p')
  // bind data to paragraphs
  .data([1,2,3,4,5,6,7,8])
  // tell me which paragraphs are missing
  .enter()
  // add missing paragraphs to missing div
  .append('p');
