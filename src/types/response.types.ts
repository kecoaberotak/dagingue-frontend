export interface MediaResponse {
  id: string;
  whatsapp: string;
  shopee: string;
  instagram: string;
  email: string;
  phone: number;
  address: string;
  maps: string;
  hero_image: string;
  logo_image: string;
  footer_image: string;
  background_image: string;
  createdAt: Date;
  updatedAt?: Date;
}
export interface AboutResponse {
  id: string;
  desc: string;
  image1: string;
  image2: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface PotongItem {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  desc: string;
  image: string;
  name: string;
  price: number;
}

export type PotongResponse = PotongItem[];

export interface ApiResponse<T> {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
}
