import IBomWeather from './IBomWeather';
import ITide from './ITide';
import IWeatherHour from './IWeatherHour';

export default interface IWeatherResponse {
  hours: IWeatherHour[];
  tides: ITide[];
  bomWinds: IBomWeather[];
}
