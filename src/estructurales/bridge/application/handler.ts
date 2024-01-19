import { ListCleanAbstraction } from '../domain/services/ListCleanAbstraction'
import { ListNumericAbstraction } from '../domain/services/ListNumericAbstraction'
import { ListUnique } from '../domain/services/ListUnique'

export function handler() {
    // Implementation
    const listUniq = new ListUnique()
    listUniq.addItem('a')
    listUniq.addItem('b')
    listUniq.addItem('c')
    listUniq.addItem('c')

    // Now we use to Different abstractions (representations) with the same implementation (behavior)

    // Now I want to use the behavior but an certain Representation
    const cleanList = new ListCleanAbstraction()
    cleanList.setImplementation(listUniq)
    console.log('\nList Clean')
    cleanList.listItems()

    const listNumeric = new ListNumericAbstraction()
    listNumeric.setImplementation(listUniq)
    console.log('\nList Numeric')
    listNumeric.listItems()
}

handler()
