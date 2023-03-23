import { BestMatch } from 'string-similarity';
import { EDefaultTypes, IBrand } from './types/brand';
export declare function getBrandByName(name: string, model?: string, type?: EDefaultTypes, year?: number): IBrand | null;
export declare function listAllBrands(): IBrand[];
export declare function autoCompleteBrand(search: string): BestMatch;
