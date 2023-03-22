import { BRANDS } from "../brands";
import { IBrand } from "../types/brand";

export function getBrandByName(name: string, model?: string | undefined): IBrand | null {
    if(!name) return null;
    let imageIndex = -1;
    let coincidencia = 999999999;
  
    if(model === undefined) model = "";
    //Buscamos el logo de la marca y el modelo, sino solo de la marca
    [name+" "+model, name].forEach((_text)=>{
      _text= _text.normalize("NFD").replace(/[-]/g," ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim();
      if(imageIndex > -1) return;
      BRANDS.forEach((item, i) => {
        let _match = item.name.toLowerCase().trim().match(_text);
        if(!_match) _match = _text.match(item.name.toLowerCase().trim());
        if (_match) {
          if(_match.index !== undefined && _match.index < coincidencia){
            imageIndex = i
            coincidencia = _match.index;
          }
        }
      })
    })
    if (imageIndex > -1) {
      return BRANDS[imageIndex];
    } else {
      return null
    }
  }