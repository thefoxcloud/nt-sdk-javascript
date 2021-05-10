import IAlertSystem from './IAlertSystem';
import ICoordinate from './ICoordinate';

export default interface IBoatRamp {
  id: string;
  title: string;
  location: ICoordinate;
  streetAddress: string;
  region: string;
  description: string;
  alert: IAlertSystem;
  signOnly: boolean;
  parking: string;
  accessible: string;
}

export interface IBoatRampOptional {
  id?: string;
  title?: string;
  location?: ICoordinate;
  streetAddress?: string;
  region?: string;
  description?: string;
  alert?: IAlertSystem;
  signOnly?: boolean;
  parking?: string;
  accessible?: string;
}
