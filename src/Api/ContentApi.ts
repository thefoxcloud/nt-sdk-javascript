import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IGeneralResponse from '../Model/IGeneralResponse';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class ContentApi<ResponseType, RequestType> extends AbstractApi {
  private endpoint: string = '';

  public constructor(env: string, endpoint: string, token?: string) {
    super(env, token);
    this.endpoint = `rest/${endpoint}`;
  }

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public list(): AxiosPromise<ResponseType[]> {
    return this.http.get(this.endpoint);
  }

  public create(data: RequestType): AxiosPromise<ResponseType> {
    return this.http.post(this.endpoint, data);
  }

  public get(id: string): AxiosPromise<ResponseType> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  public update(id: string, data: RequestType): AxiosPromise<ResponseType> {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  public delete(id: string): AxiosPromise<IGeneralResponse> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}

export default ContentApi;
