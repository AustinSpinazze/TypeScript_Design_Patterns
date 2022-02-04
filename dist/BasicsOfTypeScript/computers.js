"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = exports.MacBookPro = void 0;
const computer_1 = require("./computer");
class MacBookPro extends computer_1.default {
    constructor(serialNumber, ram) {
        super(serialNumber, ram);
    }
}
exports.MacBookPro = MacBookPro;
class Surface extends computer_1.default {
}
exports.Surface = Surface;
