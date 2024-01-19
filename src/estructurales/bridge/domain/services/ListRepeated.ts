// Concrete Implementation

import { IList } from '../interfaces/IList'

export class ListRepeated implements IList {
    private _list: string[]

    constructor() {
        this._list = []
    }

    addItem(item: string): void {
        this._list.push(item)
    }

    getItem(index: number): string {
        return this._list[index]
    }

    getCount(): number {
        return this._list.length
    }
}
