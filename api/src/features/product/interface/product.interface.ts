/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */

export interface IProductRequest {
  images: [{ src: string }];
  name: { en: string; pt: string; es: string };
}

export interface IProductResponse extends IProductRequest {
  id: string;
}
