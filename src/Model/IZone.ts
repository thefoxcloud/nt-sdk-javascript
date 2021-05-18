import IMeta from './IMeta';

export default interface IZone {
  id: string;
  title: string;
  regions: string[];
  kml: string[];
  zoneType: string[];
  images: string[];
  content: string;
  meta: IMeta[];
}

export interface IZoneOptional {
  id?: string;
  title?: string;
  regions?: string[];
  kml?: string[];
  zoneType?: string[];
  images?: string[];
  content?: string;
  meta?: IMeta[];
}
