import { IBrand } from "../types/brand";
import { Rating } from 'string-similarity';
export declare function autoCompleteBrand(search: string): Rating | null;
export declare function getBrandByName(name: string, model?: string | undefined): IBrand | null;
