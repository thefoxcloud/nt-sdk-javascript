import IWeatherData from './IWeatherData';

export default interface IWeatherHour {
  time: string;
  data: IWeatherData;
}
