// Refined abstraction

import { ListAbstraction } from './ListAbstraction'

export class ListNumericAbstraction extends ListAbstraction {
    listItems(): void {
        const listSize = this.implementation.getCount()

        for (let index = 0; index < listSize; index++) {
            console.log(`${index + 1} ${this.implementation.getItem(index)}`)
        }
    }
}
