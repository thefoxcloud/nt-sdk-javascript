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
}

export default ZoneApi;
