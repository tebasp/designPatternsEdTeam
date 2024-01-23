// Context

import { TreeType } from './TreeType'

export class Tree {
    private _positionX: number
    private _positionY: number
    private _type: TreeType

    constructor(x: number, y: number, type: TreeType) {
        this._positionX = x
        this._positionY = y
        this._type = type
    }

    showCoordinates() {
        console.log(
            `X: ${this._positionX} Y: ${
                this._positionY
            } Type: ${this._type.getType()}`
        )
    }
}
