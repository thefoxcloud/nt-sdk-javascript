import IBoatRamp, { IBoatRampOptional } from '../Model/IBoatRamp';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class BoatRampApi extends ContentApi<IBoatRamp, IBoatRampOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'boat-ramp', token);
  }
}

export default BoatRampApi;
