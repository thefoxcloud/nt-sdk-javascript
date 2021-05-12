import IFish, { IFishOptional } from '../Model/IFish';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class FishApi extends ContentApi<IFish, IFishOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'fish', token);
  }
}

export default FishApi;
