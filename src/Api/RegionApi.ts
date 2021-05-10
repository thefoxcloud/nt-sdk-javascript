import IRegion, { IRegionOptional } from '../Model/IRegion';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class RegionApi extends ContentApi<IRegion, IRegionOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'region', token);
  }
}

export default RegionApi;
