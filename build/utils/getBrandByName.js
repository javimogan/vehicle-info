"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandByName = exports.autoCompleteBrand = void 0;
const brands_1 = require("../brands");
const string_similarity_1 = require("string-similarity");
const SEARCH_ITEMS = brands_1.BRANDS.map(brand => brand.slug);
function autoCompleteBrand(search) {
    const bestMatch = (0, string_similarity_1.findBestMatch)(search, SEARCH_ITEMS).bestMatch;
    return bestMatch.rating > 0.65 ? bestMatch : null;
}
exports.autoCompleteBrand = autoCompleteBrand;
function getBrandByName(name, model) {
    var _a;
    if (!name)
        return null;
    if (model === undefined)
        model = "";
    let bestMatch = autoCompleteBrand((name + " " + model).normalize("NFD").replace(/[-]/g, " ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim());
    if (!bestMatch)
        bestMatch = autoCompleteBrand(name.normalize("NFD").replace(/[-]/g, " ").replace(/[\u0300\u036f]/g, "").toLowerCase().trim());
    return (_a = brands_1.BRANDS.find(brand => brand.slug === (bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.target))) !== null && _a !== void 0 ? _a : null;
}
exports.getBrandByName = getBrandByName;
