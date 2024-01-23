// Originator

import { Snapshot } from './Snapshot'

export class Editor {
    private _content: string
    private _selectionWidth: number

    setContent(content: string) {
        this._content = content
    }

    setSelectionWidth(width: number) {
        this._selectionWidth = width
    }

    // The Originator has the save
    save() {
        return new Snapshot(this, this._content, this._selectionWidth)
    }
}
