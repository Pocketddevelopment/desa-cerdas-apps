import APIConstants from '@constants/api';
import DeviceContants from '@constants/device';

export const header = (): string => {
  return `
    <head>
    <meta content='name='viewport' width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'  />
    </head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300&display=swap" rel="stylesheet">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="${APIConstants.SERVER}/assets/js/d3.min.js"></script>
    <div id="chart"><div/>
  `;
};

export const data = (data: any[]): string => {
  return `
    <script>
      var data = ${JSON.stringify(data)};
    </script>
  `;
};

export const pyramidChart = (): string => {
  return `
    <script>
      /* edit these settings freely */  
      var w = ${DeviceContants.screenWidth * 2.5},
          h = ${DeviceContants.screenHeight * 1.1},
          topMargin = 15,
          labelSpace = 65,
          innerMargin = w/2+labelSpace,
          outerMargin = 15,
          gap = 10,
          dataRange = d3.max(data.map(function(d) { return Math.max(d.barData1, d.barData2) }));

      /* edit with care */
      var chartWidth = w - innerMargin - outerMargin,
          barWidth = h / data.length,
          yScale = d3.scale.linear().domain([0, data.length]).range([0, h-topMargin]),
          total = d3.scale.linear().domain([0, dataRange]).range([0, chartWidth - labelSpace]),
          commas = d3.format(",.0f");
          

      /* main panel */
      var vis = d3.select("#chart").append("svg")
          .attr("width", w)
          .attr("height", h);

      /* female bars and data labels */ 
      var bar = vis.selectAll("g.bar")
          .data(data)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function(d, i) {
            return "translate(0," + (yScale(i) + topMargin) + ")";
          });

      var wholebar = bar.append("rect")
          .attr("width", w)
          .attr("height", barWidth-gap)
          .attr("fill", "none")
          .attr("pointer-events", "all");

      var highlight = function(c) {
        return function(d, i) {
          bar.filter(function(d, j) {
            return i === j;
          }).attr("class", c);
        };
      };

      bar.append("rect")
          .attr("class", "femalebar")
          .attr("height", barWidth-gap);

      bar.append("text")
          .attr("class", "femalebar")
          .attr("dx", -3)
          .attr("dy", "1em")
          .attr("text-anchor", "end");

      bar.append("rect")
          .attr("class", "malebar")
          .attr("height", barWidth-gap)
          .attr("x", innerMargin);

      bar.append("text")
          .attr("class", "malebar")
          .attr("dx", 3)
          .attr("dy", "1em");

      /* sharedLabels */
      bar.append("text")
          .attr("class", "shared")
          .attr("x", w/2)
          .attr("dy", "1em")
          .attr("text-anchor", "middle")
          .text(function(d) { return d.sharedLabel; });

      refresh(data);

      function refresh(data) {
        var bars = d3.selectAll("g.bar")
            .data(data);
        bars.selectAll("rect.malebar")
          .transition()
            .attr("width", function(d) { return total(d.barData1); });
        bars.selectAll("rect.femalebar")
          .transition()
            .attr("x", function(d) { return innerMargin - total(d.barData2) - 2 * labelSpace; }) 
            .attr("width", function(d) { return total(d.barData2); });
      }
    </script>
    <style>
      .shared, .bar, .label {
        font-size: 26pt;
        font-family: 'Inter', sans-serif;
        color: lightgrey
        fill: lightgrey
      }
      .malebar {
        fill: #FFB3B3;
      }
      .femalebar {
        fill: #6c9dc6
      }
    </style>
  `;
};
