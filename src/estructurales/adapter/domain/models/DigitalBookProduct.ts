// Adaptee

export class DigitalBookProduct {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    share(): void {
        console.log(`Share ${this._name}`)
    }
}
