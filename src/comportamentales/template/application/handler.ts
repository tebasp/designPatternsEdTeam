import { Negative } from '../domain/models/Negative'
import { Positive } from '../domain/models/Positive'

export function handler() {
    const positive = new Positive()
    const negative = new Negative()

    const posValue = positive.calculate(1)
    const negValue = negative.calculate(1)

    console.log('\nPositive value: ', posValue)
    console.log('\nNegative value: ', negValue)
}

handler()
