import DeviceContants from '@constants/device';
import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const injectedHtml = `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<div id="piechart" style={{width: '100vh' height: '100vh'}}><div/>
<script>
    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['pendidikan', 'kelulusan','color'],
      ['Tidak Sekolah', 70,'#109618'],
      ['Putus SD', 90,'#DC3912'],
      ['SD', 100,'#FF9900'],
      ['SLTP', 200,'#5293C7'],
      ['SLTA', 300,'#FFB3B3'],
      ['D3', 100,'#FFFF00'],
      ['Strata 1/2/3', 65,'#808000']
    ]);
      

      // Optional; add a title and set the width and height of the chart
      var options = {
        legend:{position: 'none'},
         width: ${DeviceContants.screenWidth * 2.5},
         height: ${DeviceContants.screenHeight * 1.5},
         pieSliceTextStyle: {fontSize: 42},
         tooltip: {
          trigger: 'none'
         }
       };

      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
</script>`;

const EducationChart: React.FC = () => {
  return (
    <WebView
      style={styles.statisticWebview}
      source={{
        html: injectedHtml,
      }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      scalesPageToFit={true}
    />
  );
};

export default EducationChart;

const styles = StyleSheet.create({
  statisticWebview: {
    flex: 1,
    height: 300,
    marginTop: -50,
    width: '100%',
  },
});
