// Composite

import { IList } from './interfaces/IList'

export class TodoList implements IList {
    private _name: string
    private _toDos: IList[]

    constructor(name: string) {
        this._name = name
        this._toDos = []
    }

    add(todo: IList): void {
        this._toDos.push(todo)
    }

    print(): void {
        console.log(`TodoList: ${this._name}`)

        // Print all To Dos's from children
        this._toDos.forEach((todo) => todo.print())
    }
}
