// Publisher

import { EventManager } from '../services/EventManager'

export class Editor {
    private _name: string
    public _eventManager: EventManager

    constructor(name: string) {
        this._name = name
        this._eventManager = new EventManager()
    }

    openFile(): void {
        console.log('\nThe file was opened')
        this._eventManager.notify('Open File')
    }

    saveFile(): void {
        console.log('\nThe file was saved')
        this._eventManager.notify('Save File')
    }
}
