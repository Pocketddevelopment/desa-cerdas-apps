import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import { Caption, Text } from '@components/typography';
import { getEducationStatisticThunk } from '@profile/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import EducationChart from './EducationChart';

const Education = () => {
  const dispatch = useAppDispatch();
  const {
    loading,
    statistic: { education },
  } = useAppSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(getEducationStatisticThunk());
  }, []);

  return loading.education ? (
    <ActivityIndicator />
  ) : (
    <>
      <View pointerEvents='none'>
        <EducationChart />
      </View>
      <View style={styles.section}>
        {education.map((e, i) => {
          return (
            <Row key={i} style={{ width: '100%' }}>
              {e.map((el, j) => {
                if (j % 2 === 0) {
                  return (
                    <Row style={{ flex: 1 }} key={el.Description}>
                      <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text
                          style={[
                            styles.flex,
                            j % 2 === 0 ? styles.right : styles.left,
                          ]}
                          size={11}>
                          {el.Description}
                        </Text>
                        <Caption
                          style={[
                            { flex: 0.7 },
                            j % 2 === 0 ? styles.right : styles.left,
                          ]}>
                          {el.Total}
                        </Caption>
                      </Row>
                      <Row
                        style={{
                          flex: 0.2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 10,
                        }}>
                        <View
                          style={{
                            backgroundColor: el.HexColor,
                            borderRadius: 100,
                            width: 10,
                            height: 10,
                          }}
                        />
                      </Row>
                      {e.length < 2 && <View style={{ flex: 1.2 }} />}
                    </Row>
                  );
                } else {
                  return (
                    <Row style={{ flex: 1 }} key={el.Description}>
                      <Row style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <Row
                          style={{
                            flex: 0.2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 10,
                          }}>
                          <View
                            style={{
                              backgroundColor: el.HexColor,
                              borderRadius: 100,
                              width: 10,
                              height: 10,
                            }}
                          />
                        </Row>
                        <Caption style={[{ flex: 0.7 }, styles.left]}>
                          {el.Total}
                        </Caption>
                        <Text style={[styles.flex, styles.left]} size={11}>
                          {el.Description}
                        </Text>
                      </Row>
                    </Row>
                  );
                }
              })}
            </Row>
          );
        })}
      </View>
    </>
  );
};

export default Education;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    height: 300,
    width: '100%',
  },
  bold: {
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
    marginBottom: 20,
  },
  flex: {
    flex: 1,
  },
  man: {
    color: '#5293C7',
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  manSign: {
    backgroundColor: '#5293C7',
    borderRadius: 5,
    padding: 5,
    width: '90%',
    marginRight: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  populationOverview: {
    alignItems: 'center',
  },
  woman: {
    color: '#D0342C',
    textAlign: 'center',
  },
  womanSign: {
    backgroundColor: '#FFB3B3',
    borderRadius: 5,
    padding: 5,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  populationChart: {
    height: 300,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  educationChart: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginTop: 40,
  },
});
