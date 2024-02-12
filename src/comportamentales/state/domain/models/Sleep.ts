import { State } from '../interfaces/State'
import { Play } from './Play'
import { Tamagutchi } from './Tamagutchi'

export class Sleep implements State {
    private context: Tamagutchi

    setContext(context: Tamagutchi) {
        this.context = context
    }

    play(): void {
        console.log('No, tengo sueno')
    }

    sleep(): void {
        console.log('Hasta manana')
        this.context.setState(new Play())
    }
}
