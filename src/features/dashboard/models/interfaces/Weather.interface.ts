export default interface WeatherInterface {
  WeatherDescription: string;
  WeatherIcon: string;
  TempMax: string;
  TempMin: string;
  Wind: string;
  WindIcon: string;
  WindDegree: string;
  NO2: string;
  NO2HexColor: string;
  O3: string;
  O3HexColor: string;
  PM25: string;
  PM25HexColor: string;
  PM10: string;
  PM10HexColor: string;
  PMDesc: string;
  Humidity: string;
  Hour: string;
  UviIndex: string;
  UviIndexColor: string;
  UviIndexImage: string;
  TableDescription: TableDescription[];
  TableUviDescription: TableDescription[];
}

interface TableDescription {
  Description: string;
  Hex: string;
  List: List[];
}

interface List {
  Value: string;
}
