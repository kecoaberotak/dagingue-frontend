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
  createAt: Date;
  updatedAt: Date;
}

export interface ApiResponse {
  status: boolean;
  statusCode: number;
  message: string;
  data: MediaResponse;
}
