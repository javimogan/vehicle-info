import { IBrand } from "../types/brand";
import { BestMatch } from 'string-similarity';
export declare function autoCompleteBrand(search: string): BestMatch;
export declare function bestMatchBrand(search: string): import("string-similarity").Rating | null;
export declare function getBrandByName(name: string, model: string): IBrand | null;
