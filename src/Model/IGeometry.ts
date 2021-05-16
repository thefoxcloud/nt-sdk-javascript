import IBoundary from './IBoundary';
import ICoordinate from './ICoordinate';

export default interface IGeometry {
  bounds: IBoundary;
  location: ICoordinate;
  locationType: string;
  viewport: IBoundary;
}
