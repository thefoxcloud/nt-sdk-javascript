import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ICoordinate from '../Model/ICoordinate';
import IBiteTime from '../Model/IBiteTime';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class BiteTimeApi extends AbstractApi {
  protected readonly endpoint: string = '';

  public constructor(env: string) {
    super(env);
    this.endpoint = `rest/bite-time`;
  }

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getBiteTime(coordinate: ICoordinate, date?: string): AxiosPromise<IBiteTime[]> {
    return this.http.post(this.endpoint, { coordinate, date });
  }
}

export default BiteTimeApi;
