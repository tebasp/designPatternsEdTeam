// Memento

import { Editor } from './Editor'

export class Snapshot {
    private _content: string
    private _selectionWidth: number
    private _editor: Editor

    constructor(editor: Editor, content: string, width: number) {
        this._editor = editor
        this._content = content
        this._selectionWidth = width
    }

    // The memento has the restore
    restore() {
        this._editor.setContent(this._content)
        this._editor.setSelectionWidth(this._selectionWidth)
    }
}
