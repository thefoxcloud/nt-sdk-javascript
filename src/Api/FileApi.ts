import AbstractApi from './AbstractApi';

class FileApi extends AbstractApi {
  private readonly endpoint: string = 'files/';

  public constructor(env: string, token?: string) {
    super(env, token);
  }

  public wrapKmlWithType(url: string, zoneType: string): string {
    return `${this.baseUrl}${this.endpoint}read-kml?url=${url}&zoneType=${zoneType}`;
  }
}

export default FileApi;
