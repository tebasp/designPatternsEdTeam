// Leaf

import { IList } from './interfaces/IList'

export class Todo implements IList {
    private name: string
    private description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }

    print(): void {
        console.log(`\tTodo: ${this.name} - ${this.description}`)
    }
}
