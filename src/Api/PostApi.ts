import { AxiosPromise } from 'axios';
import IPost, { IPostOptional } from '../Model/IPost';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class PostApi extends ContentApi<IPost, IPostOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'post', token);
  }

  public list(category?: boolean): AxiosPromise<IPost[]> {
    return this.http.get(this.endpoint, { params: { category: category === true ? 'true' : '' }});
  }
}

export default PostApi;
