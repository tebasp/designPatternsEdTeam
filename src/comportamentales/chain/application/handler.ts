import { Asesor } from '../domain/models/Asesor'
import { Coordinator } from '../domain/models/Coordinator'
import { Manager } from '../domain/models/Manager'

export function handler() {
    const assesor = new Asesor()
    const coordinator = new Coordinator()
    const manager = new Manager()

    // Set the chain of responsibility
    assesor.setNext(coordinator)
    coordinator.setNext(manager)

    // Call the chain, just the first one
    assesor.authorize(20_000)
}

handler()
