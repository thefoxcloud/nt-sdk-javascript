import IPoint, { IPointOptional } from '../Model/IPoint';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class PointApi extends ContentApi<IPoint, IPointOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'point', token);
  }
}

export default PointApi;
