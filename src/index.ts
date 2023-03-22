import { BRANDS } from './brands';
import { EDefaultTypes, IBrand } from './types/brand';
import { getBrandByName as _getBrandByName } from './utils/getBrandByName';

export function getBrandByName(name: string, model?: string | undefined, type?: EDefaultTypes): IBrand | null {
    return _getBrandByName(name, model) ?? BRANDS.find(brand => brand.slug === `default-${type}`) ?? null;
}