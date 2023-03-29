"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brands = exports.getBrandByName = void 0;
const brands_1 = require("./brands");
const brand_1 = require("./types/brand");
const getBrandByName_1 = require("./utils/getBrandByName");
const moment_1 = __importDefault(require("moment"));
function getBrandByName(name, model = "", type = brand_1.EDefaultTypes.CAR, year = (0, moment_1.default)().get('years')) {
    var _a, _b;
    return (_b = (_a = (0, getBrandByName_1.getBrandByName)(name, model)) !== null && _a !== void 0 ? _a : brands_1.BRANDS.find(brand => brand.slug === `default-${type}`)) !== null && _b !== void 0 ? _b : null;
}
exports.getBrandByName = getBrandByName;
exports.brands = brands_1.BRANDS;
