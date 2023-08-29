import { faker } from "@faker-js/faker";
import { IProductRequest } from "@features/product";

export const generateProductMock = (): IProductRequest => {
  return {
    images: [
      {
        src: faker.image.abstract(72, 72, true),
      },
    ],
    name: {
      en: faker.commerce.productName(),
      pt: faker.commerce.productName(),
      es: faker.commerce.productName(),
    },
  };
};
