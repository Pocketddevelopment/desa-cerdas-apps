import DeviceContants from '@constants/device';
import { data, formatter, header } from '@profile/utils/educationChart';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/rootReducers';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import WebView from 'react-native-webview';

const EducationChart: React.FC = () => {
  const {
    loading,
    statistic: { education },
  } = useAppSelector((state: RootState) => state.profile);

  const [educationData, setEducationData] = useState<any>([]);

  const injectedHtml = useMemo(() => {
    return `
    ${header()}
    ${data(educationData)}
  `;
  }, [educationData]);

  useEffect(() => {
    const newDataFormat = formatter(education);
    setEducationData([newDataFormat]);
  }, []);

  return loading.education || educationData.length <= 0 ? (
    <ActivityIndicator />
  ) : (
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

export default EducationChart;

const styles = StyleSheet.create({
  statisticWebview: {
    flex: 1,
    height: 300,
    marginTop: -50,
    width: '100%',
  },
});
