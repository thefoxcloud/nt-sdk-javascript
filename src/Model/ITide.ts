export default interface ITide {
  date: string;
  data: ITideData[];
}

export interface ITideData {
  type: string;
  time: string;
  height: string;
}
