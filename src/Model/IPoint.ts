import ICoordinate from './ICoordinate';
import IMeta from './IMeta';

export default interface IPoint {
  id: string;
  title: string;
  regions: string[];
  location: ICoordinate;
  images: string[];
  meta: IMeta[];
  pointType: string;
  description: string;
}

export interface IPointOptional {
  id?: string;
  title?: string;
  regions?: string[];
  location?: ICoordinate;
  images?: string[];
  meta?: IMeta[];
  pointType?: string;
  description?: string;
}

export interface IPointWithDisance extends IPoint {
  distance: number;
}
