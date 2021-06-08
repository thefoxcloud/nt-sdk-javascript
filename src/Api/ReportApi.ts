import IReport, { IReporOptional } from '../Model/IReport';
import ContentApi from './ContentApi';

/**
 * @since v1.0.0
 * Implemented by Kayo Chan <kayo@foxysun.com>
 */

class ReportApi extends ContentApi<IReport, IReporOptional> {
  public constructor(env: string, token?: string) {
    super(env, 'report', token);
  }
}

export default ReportApi;
