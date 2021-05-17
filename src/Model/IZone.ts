export default interface IZone {
  id: string;
  title: string;
  regions: string[];
  kml: string[];
  zoneType: string[];
  images: string[];
  content: string;
}

export interface IZoneOptional {
  id?: string;
  title?: string;
  regions?: string[];
  kml?: string[];
  zoneType?: string[];
  images?: string[];
  content?: string;
}
