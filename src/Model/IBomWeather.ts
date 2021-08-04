export interface IWindData {
  time: string;
  windSpeedKmh: number;
  windSpeedKnot: number;
  windDirection: string;
}

export default interface IBomWeather {
  dateString: string;
  dateText: string;
  windData: IWindData[];
}
