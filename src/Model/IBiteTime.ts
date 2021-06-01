import IBite from './IBite';
import IRiseSet from './IRiseSet';

export default interface IBiteTime {
  date: string;
  dateISO: string;
  bites: IBite[];
  riseset: IRiseSet[];
}
