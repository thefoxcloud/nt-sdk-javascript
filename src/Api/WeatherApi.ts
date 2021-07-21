import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ICoordinate from '../Model/ICoordinate';
import IWeatherResponse from '../Model/IWeatherResponse';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class WeatherApi extends AbstractApi {
  protected readonly endpoint: string = '';

  public constructor(env: string) {
    super(env);
    this.endpoint = `rest/weather`;
  }

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getWeather(coordinate: ICoordinate): AxiosPromise<IWeatherResponse> {
    return this.http.get(this.endpoint, {
      params: {
        lat: coordinate.lat,
        lng: coordinate.lng,
        skipCache: true
      }
    });
  }
}

export default WeatherApi;
