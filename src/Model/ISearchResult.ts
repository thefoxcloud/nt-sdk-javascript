import DataResultType from '../Enum/DataResultType';

export default interface ISearchResult {
  id: string;
  title: string;
  image: string;
  type: DataResultType;
}
