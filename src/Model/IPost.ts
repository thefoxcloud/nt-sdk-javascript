export default interface IPost {
  id: string;
  title: string;
  images: string[];
  category: string;
  content: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPostOptional {
  id?: string;
  title?: string;
  images?: string[];
  category?: string;
  content?: string;
  icon?: string;
}
