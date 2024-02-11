// Concrete iterator

import { Iterator } from '../interfaces/Iterator'
import { NumberCollection } from '../models/NumberCollection'

export class NumberIterator implements Iterator<number> {
    private _numberCollection: NumberCollection
    private _position: number

    constructor(collection: NumberCollection) {
        this._numberCollection = collection
        this._position = 0
    }

    first(): number {
        this._position = 0
        return this._numberCollection.numbers[this._position]
    }

    next(): number {
        this._position++
        return this._numberCollection.numbers[this._position]
    }

    hasMore(): boolean {
        return this._position < this._numberCollection.numbers.length
    }
}
