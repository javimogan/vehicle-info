"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = exports.getBrandByName = void 0;
const getBrandByName_1 = require("./utils/getBrandByName");
function getBrandByName(name, model) {
    return (0, getBrandByName_1.getBrandByName)(name, model);
}
exports.getBrandByName = getBrandByName;
function sayHello(name) {
    return `Hello ${name !== null && name !== void 0 ? name : 'World'}!`;
}
exports.sayHello = sayHello;
