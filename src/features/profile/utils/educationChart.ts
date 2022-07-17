import DeviceContants from '@constants/device';
import EducationStatisticInterface from '@profile/models/interfaces/EducationStatistic.interface';

export const header = () => {
  return `
    <head>
      <meta content='name='viewport' width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'  />
    </head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div id="piechart"><div/>
  `;
};

export const data = (data: any) => {
  const colors = Object.assign(
    {},
    data.map((e: Array<string>) => {
      return { color: e[2] };
    })
  );
  return `
  <script>
    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Pendidikan', 'Kelulusan', 'color'],
          ${JSON.stringify(data.flat())}
        ]);
        

        // Optional; add a title and set the width and height of the chart
        var options = {
          legend:{position: 'none'},
          width: ${DeviceContants.screenWidth * 2.5},
          height: ${DeviceContants.screenHeight * 1.5},
          pieSliceTextStyle: {fontSize: 42},
          tooltip: {
            trigger: 'none'
          },
          slices: ${JSON.stringify(colors)}
        };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      drawChart()
    </script>
  `;
};

export const formatter = (data: [EducationStatisticInterface[]]) => {
  const dataArray = data.flat();
  const newDataFormat = dataArray.map((e) => {
    return [e.Description, e.Total, e.HexColor];
  });
  return newDataFormat.flat();
};
