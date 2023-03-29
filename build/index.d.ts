import { EDefaultTypes, IBrand } from './types/brand';
export declare function getBrandByName(name: string, model?: string, type?: EDefaultTypes, year?: number): IBrand | null;
export declare const brands: IBrand[];
