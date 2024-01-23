// CareTaker

import { Snapshot } from '../models/Snapshot'

export class EditorTaker {
    private _snapshots: Snapshot[]

    constructor() {
        this._snapshots = []
    }

    save(snapshot: Snapshot): void {
        this._snapshots.push(snapshot)
    }

    restore(): void {
        const currentSnapshot = this._snapshots.pop()
        currentSnapshot.restore()
    }
}
