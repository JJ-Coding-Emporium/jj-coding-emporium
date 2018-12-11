/* global d3 */

const data = [
  {letter: 'A', frequency: 0.08167},
  {letter: 'B', frequency: 0.01492},
  {letter: 'C', frequency: 0.02782},
  {letter: 'D', frequency: 0.04253},
  {letter: 'E', frequency: 0.12702},
  {letter: 'F', frequency: 0.02288},
  {letter: 'G', frequency: 0.02015},
  {letter: 'H', frequency: 0.06094},
  {letter: 'I', frequency: 0.06966},
  {letter: 'J', frequency: 0.00153},
  {letter: 'K', frequency: 0.00772},
  {letter: 'L', frequency: 0.04025},
  {letter: 'M', frequency: 0.02406},
  {letter: 'N', frequency: 0.06749},
  {letter: 'O', frequency: 0.07507},
  {letter: 'P', frequency: 0.01929},
  {letter: 'Q', frequency: 0.00095},
  {letter: 'R', frequency: 0.05987},
  {letter: 'S', frequency: 0.06327},
  {letter: 'T', frequency: 0.09056},
  {letter: 'U', frequency: 0.02758},
  {letter: 'V', frequency: 0.00978},
  {letter: 'W', frequency: 0.02360},
  {letter: 'X', frequency: 0.00150},
  {letter: 'Y', frequency: 0.01974},
  {letter: 'Z', frequency: 0.00074}
]

document.addEventListener('DOMContentLoaded', function () {
  const barChartFactory = options => {
    const { 
      width = 700,
      height = 500,
      chartID,
      data
    } = options

    const margin = {
      top: 15,
      right: 25,
      bottom: 25,
      left: 60
    }
  
    const aWidth = width  - margin.left - margin.right
    const aHeight = height - margin.top - margin.bottom
  
    const x = d3.scaleBand()
            .range([0, aWidth])
            .padding(0.1)
    const y = d3.scaleLinear()
            .range([aHeight, 0])
  
    const svg = d3
      .select(chartID)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  
    x.domain(data.map(x => x.letter))
    y.domain([0, d3.max(data, x => x.frequency)])
  
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.letter))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.frequency))
      .attr('height', d => aHeight - y(d.frequency))
  
    svg.append('g')
      .attr('transform', `translate(0, ${aHeight})`)
      .call(d3.axisBottom(x))
  
    // add the y Axis
    svg.append('g')
      .call(d3.axisLeft(y))
    
    return svg
  }

  const chart = barChartFactory({
    chartID: '#chart',
    data
  })
})
