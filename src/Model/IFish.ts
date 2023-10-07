import IMeta from './IMeta';

export default interface IFish {
  id: string;
  title: string;
  scientificName: string;
  category: string;
  images: string[];
  regions: string[];
  minimumSizeLimit: string;
  possessionLimitPersonal: string;
  riskLevel: string;
  content: string;
  meta: IMeta[];
  createdAt: string;
  updatedAt: string;
  vesselLimit: IMeta[];
  order?: number;
}

export interface IFishOptional {
  id?: string;
  title?: string;
  scientificName?: string;
  category?: string;
  images?: string[];
  regions?: string[];
  minimumSizeLimit?: string;
  possessionLimitPersonal?: string;
  riskLevel?: string;
  content?: string;
  meta?: IMeta[];
  vesselLimit?: IMeta[];
  order?: number;
}
