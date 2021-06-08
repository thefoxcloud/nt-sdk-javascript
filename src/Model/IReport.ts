import ICoordinate from './ICoordinate';

export default interface IReport {
  id: string;
  title: string;
  category: string;
  reporter: string;
  reporterEmail: string;
  reporterPhone: string;
  description: string;
  images: string[];
  location: string;
  coordinates: ICoordinate;
}

export interface IReporOptional {
  id?: string;
  title?: string;
  category?: string;
  reporter?: string;
  reporterEmail?: string;
  reporterPhone?: string;
  description?: string;
  images?: string[];
  location?: string;
  coordinates?: ICoordinate;
}
