import ICoordinate from './ICoordinate';

export default interface ITideStation {
  name: string;
  coordinate: ICoordinate;
  code: string;
}
