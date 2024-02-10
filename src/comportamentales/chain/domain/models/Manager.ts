import { Authorize } from '../interfaces/Authorize'

export class Manager implements Authorize {
    next: Authorize

    authorize(request: number): string {
        console.log(`Autorizado por el Gerente con monto de ${request}`)
        return `Autorizado por el Gerente con monto de ${request}`
    }

    setNext(authorize: Authorize) {
        this.next = authorize
    }
}
