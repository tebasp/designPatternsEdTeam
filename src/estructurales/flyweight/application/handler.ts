import { TreeEnum } from '../domain/enums/TreeEnum'
import { TreeFactory } from '../domain/services/TreeFactory'
import { TreeForest } from '../domain/services/TreeForest'

export function handler() {
    const treeFactory = new TreeFactory()
    const forest = new TreeForest(treeFactory)

    forest.plantTree(1, 2, TreeEnum.PINO)
    forest.plantTree(3, 4, TreeEnum.PINO)
    forest.plantTree(4, 4, TreeEnum.PINO)
    forest.plantTree(5, 6, TreeEnum.EUCALIPTO)

    forest.printTrees()
}

handler()
