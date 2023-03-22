"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandByName = void 0;
const brands_1 = require("./brands");
const getBrandByName_1 = require("./utils/getBrandByName");
function getBrandByName(name, model, type) {
    var _a, _b;
    return (_b = (_a = (0, getBrandByName_1.getBrandByName)(name, model)) !== null && _a !== void 0 ? _a : brands_1.BRANDS.find(brand => brand.slug === `default-${type}`)) !== null && _b !== void 0 ? _b : null;
}
exports.getBrandByName = getBrandByName;
