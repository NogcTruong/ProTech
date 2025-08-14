export interface RawProduct {
  name: string;
  img: string;
  price: string;
  discount: string;
  color: string[];
  version: string;
}

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant: string;
  quantity: number;
  discount?: string;
  colors?: string[];
  version?: string;
}
