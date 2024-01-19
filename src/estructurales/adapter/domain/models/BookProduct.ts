import { IProduct } from '../interfaces/IProduct'

export class BookProduct implements IProduct {
    private _name: string

    constructor(name: string) {
        this._name = name
    }
    sell() {
        console.log(`Selling ${this._name}`)
    }
    stock() {
        console.log(`Stocking ${this._name}`)
    }
}
