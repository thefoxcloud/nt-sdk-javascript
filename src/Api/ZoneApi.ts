import { AxiosPromise } from 'axios';
import IZone, { IZoneOptional } from '../Model/IZone';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class ZoneApi extends ContentApi<IZone, IZoneOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'zone', token);
  }

  public list(withCoordinates?: boolean): AxiosPromise<IZone[]> {
    return this.http.get(this.endpoint, { params: { withCoordinates: withCoordinates === true ? 'true' : '' }});
  }
}

export default ZoneApi;
