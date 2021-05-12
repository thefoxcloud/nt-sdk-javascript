export default interface IFish {
  id: string;
  title: string;
  scientificName: string;
  category: string;
  otherNames: string[];
  images: string[];
  regions: string[];
  minimumSizeLimit: number;
  possessionLimitPersonal: number;
  riskLevel: string;
  riskText: string;
  livingArea: string;
  sizeAndAge: string;
  howToCatch: string;
  howToCook: string;
  content: string;
}

export interface IFishOptional {
  id?: string;
  title?: string;
  scientificName?: string;
  category?: string;
  otherNames?: string[];
  images?: string[];
  regions?: string[];
  minimumSizeLimit?: number;
  possessionLimitPersonal?: number;
  riskLevel?: string;
  riskText?: string;
  livingArea?: string;
  sizeAndAge?: string;
  howToCatch?: string;
  howToCook?: string;
  content?: string;
}
