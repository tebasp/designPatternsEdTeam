import { A } from './models/A'
import { B } from './models/B'
import { C } from './models/C'

export class PrintFacade {
    // Envuelve muchos objetos en uno solo
    private _a: A
    private _b: B
    private _c: C

    constructor(private a: A, private b: B, private c: C) {
        this._a = a
        this._b = b
        this._c = c
    }

    // Una interfaz simple para un subsistema complejo
    public print(): void {
        this._a.checkInfo()
        this._b.checkPaper()
        this._c.print()
    }
}
