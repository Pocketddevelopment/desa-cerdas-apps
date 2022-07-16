import { data, header, pyramidChart } from '@profile/utils/chart';
import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const StatisticChart: React.FC = () => {
  const [statisticData, setStatisticData] = useState<any>([
    { sharedLabel: '75+', barData1: 43041, barData2: 40852 },
    { sharedLabel: '70-74', barData1: 38867, barData2: 36296 },
    { sharedLabel: '70-74', barData1: 41748, barData2: 40757 },
    { sharedLabel: '65-69', barData1: 24831, barData2: 23624 },
    { sharedLabel: '60-64', barData1: 15764, barData2: 15299 },
    { sharedLabel: '55-59', barData1: 17006, barData2: 16071 },
    { sharedLabel: '50-54', barData1: 24309, barData2: 23235 },
    { sharedLabel: '45-49', barData1: 46756, barData2: 46065 },
    { sharedLabel: '40-44', barData1: 41923, barData2: 41704 },
    { sharedLabel: '35-39', barData1: 42565, barData2: 42159 },
    { sharedLabel: '30-34', barData1: 44316, barData2: 45468 },
    { sharedLabel: '25-29', barData1: 42975, barData2: 44223 },
    { sharedLabel: '20-24', barData1: 36755, barData2: 39452 },
    { sharedLabel: '15-19', barData1: 31578, barData2: 34063 },
    { sharedLabel: '10-14', barData1: 10328, barData2: 11799 },
    { sharedLabel: '5-9', barData1: 13917, barData2: 14949 },
    { sharedLabel: '0-4', barData1: 7920, barData2: 8589 },
  ]);

  const injectedHtml = useMemo(
    () => `
    ${header()}
    ${data(statisticData)}
    ${pyramidChart()}`,
    []
  );

  return (
    <WebView
      androidLayerType='software'
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

export default StatisticChart;

const styles = StyleSheet.create({
  statisticWebview: {
    flex: 1,
    height: 300,
    width: '100%',
  },
});
