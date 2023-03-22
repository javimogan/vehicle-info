"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandByName = void 0;
const brands_1 = require("../brands");
function getBrandByName(name, model) {
    if (!name)
        return null;
    let imageIndex = -1;
    let coincidencia = 999999999;
    if (model === undefined)
        model = "";
    [name + " " + model, name].forEach((_text) => {
        _text = _text.normalize("NFD").replace(/[-]/g, " ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim();
        if (imageIndex > -1)
            return;
        brands_1.BRANDS.forEach((item, i) => {
            let _match = item.name.toLowerCase().trim().match(_text);
            if (!_match)
                _match = _text.match(item.name.toLowerCase().trim());
            if (_match) {
                if (_match.index !== undefined && _match.index < coincidencia) {
                    imageIndex = i;
                    coincidencia = _match.index;
                }
            }
        });
    });
    if (imageIndex > -1) {
        return brands_1.BRANDS[imageIndex];
    }
    else {
        return null;
    }
}
exports.getBrandByName = getBrandByName;
