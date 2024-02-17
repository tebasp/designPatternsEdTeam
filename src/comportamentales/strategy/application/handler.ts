import { AddStrategy } from '../domain/models/AddStrategy'
import { SubtractStrategy } from '../domain/models/SubstractStrategy'
import { OperationContext } from '../domain/services/OperationContext'

export function handler() {
    const addStrategy = new AddStrategy()
    const subtractStrategy = new SubtractStrategy()

    const context = new OperationContext()

    context.setStrategy(addStrategy)
    const add = context.executeStrategy(3, 4)
    console.log('🚀 ~ handler ~ add:', add)

    context.setStrategy(subtractStrategy)
    const subtract = context.executeStrategy(3, 4)
    console.log('🚀 ~ handler ~ subtract:', subtract)
}

handler()
