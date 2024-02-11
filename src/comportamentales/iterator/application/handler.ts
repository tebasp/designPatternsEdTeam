import { NumberCollection } from '../domain/models/NumberCollection'

export function handler() {
    const numberCollection = new NumberCollection()

    numberCollection.push(1)
    numberCollection.push(2)
    numberCollection.push(3)
    numberCollection.push(4)

    const iterator = numberCollection.getIterator()

    while (iterator.hasMore()) {
        const current = iterator.next()
        console.log(`Current: ${current}`)
    }
}

handler()
