type ArticleType =
  | 'T-Shirt'
  | 'Shorts'
  | 'Jeans'
  | 'Shirt'
  | 'Jacket'
  | 'Hoodie'
  | 'Dress'
  | 'Skirt'
  | 'Blazer'
  | 'Sweater'
  | 'Coat'
  | 'Pants'
  | 'Beanie'
  | 'Shacket';

export type Size =
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | 'XXL'
  | 'One Size'
  | '29/30'
  | '30/30'
  | '31/32'
  | '32/30'
  | '32/32'
  | '32/34'
  | '33/32'
  | '34/30'
  | '34/32'
  | '34/36'
  | '36/30'
  | '36/32'
  | '36/34'
  | '38/32';

export type Color =
  | 'White'
  | 'Black'
  | 'Gray'
  | 'Navy'
  | 'Blue'
  | 'Dark Blue'
  | 'Light Blue'
  | 'Deep Blue'
  | 'Green'
  | 'Fir Green'
  | 'Red'
  | 'Beige'
  | 'Pink'
  | 'Yellow'
  | 'Camel'
  | 'Caramel'
  | 'Khaki'
  | 'Petrol'
  | 'Slate Gray'
  | 'Olive Green'
  | 'Sandstone'
  | 'Graphite'
  | 'Chili Red'
  | 'Light Brown'
  | 'Brown'
  | 'Lavender'
  | 'Ocean Blue';

export interface ProductVariant {
  key: number;
  color: Color;
  hexColor: string;
  images: string[];
  sizes: Size[];
}

export interface Product {
  id: number;
  name: string;
  retailPrice: number;
  discount?: number;
  type: ArticleType;
  variants: ProductVariant[];
}
