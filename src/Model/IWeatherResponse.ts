import IBomWeather from './IBomWeather';
import ITide from './ITide';
import ITideStation from './ITideStation';
import IWeatherHour from './IWeatherHour';
import IWindStation from './IWindStation';

export default interface IWeatherResponse {
  hours: IWeatherHour[];
  tides: ITide[];
  bomWinds: IBomWeather[];
  tideStation: ITideStation;
  weatherStation: IWindStation;
}
