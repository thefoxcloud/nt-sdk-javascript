import { AxiosPromise } from 'axios';
import ISearchResult from '../Model/ISearchResult';
import AbstractApi from './AbstractApi';

class SearchApi extends AbstractApi {
  private readonly endpoint: string = 'rest/search';

  public constructor(env: string, token?: string) {
    super(env, token);
  }

  public search(term: string): AxiosPromise<ISearchResult[]> {
    return this.http.get(this.endpoint, {
      params: {
        query: term
      }
    });
  }
}

export default SearchApi;
