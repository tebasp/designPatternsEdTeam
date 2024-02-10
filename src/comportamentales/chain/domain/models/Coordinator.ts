import { Authorize } from '../interfaces/Authorize'

export class Coordinator implements Authorize {
    next: Authorize

    authorize(request: number): string {
        if (request <= 10000) {
            console.log(`Autorizado por el Coordinador con monto de ${request}`)
            return `Autorizado por el Coordinador con monto de ${request}`
        }

        this.next?.authorize(request)
    }

    setNext(authorize: Authorize) {
        this.next = authorize
    }
}
