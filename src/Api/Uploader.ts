import { AxiosPromise } from 'axios';
import IImageUploadRes from '../Model/IImageUploadRes';
import AbstractApi from './AbstractApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class Uploader extends AbstractApi {
  public constructor(env: string) {
    super(env);
  }

  public getImageUploadUrl(fileName: string, fileType: string): AxiosPromise<IImageUploadRes> {
    return this.http.get('upload/get-upload-url', { params: {
      fileName,
      fileType
    }});
  }
}

export default Uploader;
