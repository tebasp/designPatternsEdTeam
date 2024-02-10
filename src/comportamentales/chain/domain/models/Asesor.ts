import { Authorize } from '../interfaces/Authorize'

export class Asesor implements Authorize {
    next: Authorize

    authorize(request: number): string {
        if (request <= 2000) {
            console.log(`Autorizado por el Asesor con monto de ${request}`)
            return `Autorizado por el Asesor con monto de ${request}`
        }

        this.next?.authorize(request)
    }

    setNext(authorize: Authorize) {
        this.next = authorize
    }
}
