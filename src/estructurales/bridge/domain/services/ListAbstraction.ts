// Abstraction or Representation

import { IList } from '../interfaces/IList'

export abstract class ListAbstraction {
    protected implementation: IList

    // This is required because is an Abstract class, can not be instantiated
    setImplementation(implementation: IList) {
        this.implementation = implementation
    }

    addItem(item: string): void {
        this.implementation.addItem(item)
    }

    getItem(index: number): string {
        return this.implementation.getItem(index)
    }

    // This is not in the IList interface
    // The abstraction is a role interface, what client needs
    // Can differ from Implementation interface
    listItems(): void {
        const listSize = this.implementation.getCount()

        for (let index = 0; index < listSize; index++) {
            console.log(this.implementation.getItem(index))
        }
    }

    getCount(): number {
        return this.implementation.getCount()
    }
}
