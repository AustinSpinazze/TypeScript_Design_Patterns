"use strict";
// In larger projects it is common very common to have a separate file for the class. This is called a module. In this example we are importing different computer objects from the src/BasicsOfTypeScript/computers.ts file.
Object.defineProperty(exports, "__esModule", { value: true });
const computers_1 = require("./computers");
const macBookPro = new computers_1.MacBookPro('12345', 32);
console.log(`The ${computers_1.MacBookPro.name} serial number is ${macBookPro.serialNumber} and it has ${macBookPro.ram} GB of RAM.`);
const surface = new computers_1.Surface('54321', 16);
console.log(`The ${computers_1.Surface.name} serial number is ${surface.serialNumber} and it has ${surface.ram} GB of RAM.`);
