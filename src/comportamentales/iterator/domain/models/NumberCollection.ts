// Collection

import { Iterator } from '../interfaces/Iterator'
import { NumberIterator } from '../services/NumberIterator'

export class NumberCollection {
    public numbers: number[]
    private _iterator: Iterator<number>

    constructor() {
        this.numbers = []
    }

    push(num: number) {
        this.numbers.push(num)
    }

    getIterator(): Iterator<number> {
        if (this._iterator) return this._iterator

        this._iterator = new NumberIterator(this)
        return this._iterator
    }
}
