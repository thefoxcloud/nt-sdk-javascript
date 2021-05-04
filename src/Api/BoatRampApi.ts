import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IBoatRamp from '../Model/IBoatRamp';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class BoatRampApi extends AbstractApi {
  private readonly ENDPOINT: string = 'boat-ramp';

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllBoatRamps(): AxiosPromise<IBoatRamp[]> {
    return this.http.get(this.ENDPOINT);
  }
}

export default BoatRampApi;
