import IGeometry from './IGeometry';

export default interface IRegion {
  id: string;
  title: string;
  address: string;
  geometry: IGeometry;
  placeId: string;
}

export interface IRegionOptional {
  id?: string;
  title: string;
  address?: string;
  geometry?: IGeometry;
  placeId?: string;
}
