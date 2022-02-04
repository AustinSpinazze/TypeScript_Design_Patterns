export default class Computer {
	serialNumber: string;
	ram: number;

	constructor(serialNumber: string, ram: number) {
		this.serialNumber = serialNumber;
		this.ram = ram;
	}
}
