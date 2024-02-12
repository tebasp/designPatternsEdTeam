// State

import { Tamagutchi } from '../models/Tamagutchi'

export interface State {
    play(): void
    sleep(): void

    setContext(context: Tamagutchi)
}
