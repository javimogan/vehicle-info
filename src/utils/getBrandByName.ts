import { BRANDS } from "../brands";
import { IBrand } from "../types/brand";
import {findBestMatch, Rating } from 'string-similarity';

const SEARCH_ITEMS = BRANDS.map(brand=>brand.slug);
export function autoCompleteBrand(search: string){
  const bestMatch = findBestMatch(search,SEARCH_ITEMS).bestMatch
  return bestMatch.rating > 0.65 ? bestMatch : null;
}
export function getBrandByName(name: string, model?: string | undefined): IBrand | null {
    if(!name) return null;
    //let bestBrand: Rating | undefined = undefined;
    if(model === undefined) model = "";
    //Buscamos el logo de la marca y el modelo, sino solo de la marca
    /*[name+" "+model, name].forEach((_text)=>{
      const bestMatch = autoCompleteBrand(_text.normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim())
      if(bestMatch && bestMatch.rating > (bestBrand?.rating ?? 0)){
        bestBrand = bestMatch;
      }
    });*/
    let bestMatch = autoCompleteBrand((name+" "+model).normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim())
    if(!bestMatch) bestMatch = autoCompleteBrand(name.normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim())
    return BRANDS.find(brand => brand.slug === bestMatch?.target) ?? null;
  }