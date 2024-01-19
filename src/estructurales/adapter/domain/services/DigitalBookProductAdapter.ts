// Adapter: Adaptador de la clase DigitalBookProduct a la interfaz IProduct

import { IProduct } from '../interfaces/IProduct'
import { DigitalBookProduct } from '../models/DigitalBookProduct'

export class DigitalBookProductAdapter implements IProduct {
    private _digitalBookProduct: DigitalBookProduct

    constructor(digitalBookProduct: DigitalBookProduct) {
        this._digitalBookProduct = digitalBookProduct
    }

    sell(): void {
        // Call the original Adaptee method
        this._digitalBookProduct.share()
    }

    stock(): void {
        console.log('INFINITY')
    }
}
