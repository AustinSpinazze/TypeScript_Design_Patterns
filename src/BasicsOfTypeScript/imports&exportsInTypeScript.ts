// In larger projects it is common very common to have a separate file for the class. This is called a module. In this example we are importing different computer objects from the src/BasicsOfTypeScript/computers.ts file.

import { MacBookPro, Surface } from './computers';

const macBookPro: MacBookPro = new MacBookPro('12345', 32);
console.log(
	`The ${MacBookPro.name} serial number is ${macBookPro.serialNumber} and it has ${macBookPro.ram} GB of RAM.`
);
const surface = new Surface('54321', 16);
console.log(
	`The ${Surface.name} serial number is ${surface.serialNumber} and it has ${surface.ram} GB of RAM.`
);
