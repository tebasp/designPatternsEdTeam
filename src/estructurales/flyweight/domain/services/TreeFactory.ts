// Factory

import { TreeEnum } from '../enums/TreeEnum'
import { TreeType } from '../models/TreeType'

export class TreeFactory {
    private _treeTypes: TreeType[]

    constructor() {
        this._treeTypes = []
    }

    getTreeType(type: TreeEnum) {
        let tree = this._treeTypes.find((item) => item.getType() === type)

        if (!tree) {
            tree = new TreeType(type)
            this._treeTypes.push(tree)
        }

        return tree
    }
}
