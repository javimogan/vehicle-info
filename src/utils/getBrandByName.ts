import { BRANDS } from "../brands";
import { IBrand } from "../types/brand";
import {BestMatch, findBestMatch } from 'string-similarity';

const SEARCH_ITEMS = BRANDS.map(brand=>brand.slug);

export function autoCompleteBrand(search: string): BestMatch{
  return findBestMatch(search,SEARCH_ITEMS)
}

export function bestMatchBrand(search: string){
  const bestMatch = findBestMatch(search,SEARCH_ITEMS).bestMatch
  return bestMatch.rating > 0.65 ? bestMatch : null;
}
export function getBrandByName(name: string, model: string): IBrand | null {
    if(!name) return null;
    let bestMatch = bestMatchBrand((name+" "+model).normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim())
    if(!bestMatch) bestMatch = bestMatchBrand(name.normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim())
    return BRANDS.find(brand => brand.slug === bestMatch?.target) ?? null;
  }