// Concrete State

import { State } from '../interfaces/State'
import { Sleep } from './Sleep'
import { Tamagutchi } from './Tamagutchi'

export class Play implements State {
    private context: Tamagutchi

    setContext(context: Tamagutchi) {
        this.context = context
    }

    play(): void {
        console.log('OK juguemos')
        this.context.setState(new Sleep())
    }

    sleep(): void {
        console.log('No, quiero jugar')
    }
}
