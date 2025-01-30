import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import product from './product';
import { categoryType } from './categoryType';
import { orderType } from './orderType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,categoryType,orderType],
};
