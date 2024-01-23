// Client context

import { TreeEnum } from '../enums/TreeEnum'
import { Tree } from '../models/Tree'
import { TreeFactory } from './TreeFactory'

export class TreeForest {
    private _treeFactory: TreeFactory
    private _trees: Tree[]

    constructor(treeFactory: TreeFactory) {
        this._treeFactory = treeFactory
        this._trees = []
    }

    plantTree(x: number, y: number, type: TreeEnum): void {
        const treeType = this._treeFactory.getTreeType(type)
        const tree = new Tree(x, y, treeType)
        this._trees.push(tree)
    }

    printTrees() {
        this._trees.forEach((item) => item.showCoordinates())
    }
}
