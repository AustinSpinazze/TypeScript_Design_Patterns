import Computer from './computer';

export class MacBookPro extends Computer {
	constructor(serialNumber: string, ram: number) {
		super(serialNumber, ram);
	}
}

export class Surface extends Computer {}
