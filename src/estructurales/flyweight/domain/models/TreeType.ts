// Flyweight

import { TreeEnum } from '../enums/TreeEnum'

export class TreeType {
    private _type: TreeEnum

    constructor(type: TreeEnum) {
        console.log(`New Type Created`)
        this._type = type
    }

    showType() {
        console.log(`Type: ${this._type}`)
    }

    getType(): TreeEnum {
        return this._type
    }
}
