import { BestMatch } from 'string-similarity';
import { BRANDS } from './brands';
import { EDefaultTypes, IBrand } from './types/brand';
import { getBrandByName as _getBrandByName } from './utils/getBrandByName';
import moment from 'moment';
/* Get brand by name or default car brand*/
export function getBrandByName(name: string, model: string = "", type: EDefaultTypes = EDefaultTypes.CAR, year: number = moment().get('years')): IBrand | null {
    return _getBrandByName(name, model) ?? BRANDS.find(brand => brand.slug === `default-${type}`) ?? null;
}

/* List all brands */
export function listAllBrands(): IBrand[] {
    return BRANDS;
}


/* Autocomplete brand name */
export function autoCompleteBrand(search: string): BestMatch {
    return autoCompleteBrand(search);
}
