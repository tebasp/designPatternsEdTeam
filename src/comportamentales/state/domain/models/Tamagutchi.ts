// Context

import { State } from '../interfaces/State'

export class Tamagutchi {
    private _state: State

    constructor(state: State) {
        this.setState(state)
    }

    setState(state: State) {
        this._state = state
        this._state.setContext(this)
    }

    play(): void {
        this._state.play()
    }

    sleep(): void {
        this._state.sleep()
    }
}
