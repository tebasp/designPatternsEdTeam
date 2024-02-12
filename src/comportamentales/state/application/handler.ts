import { Play } from '../domain/models/Play'
import { Tamagutchi } from '../domain/models/Tamagutchi'

export function handler() {
    const initialState = new Play()
    const tamagutchi = new Tamagutchi(initialState)

    tamagutchi.sleep()
    tamagutchi.play()
    tamagutchi.play()
    tamagutchi.sleep()
    tamagutchi.play()
}

handler()
