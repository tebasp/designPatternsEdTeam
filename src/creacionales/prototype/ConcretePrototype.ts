// Concrete Prototype

import { Prototype } from './Prototype'

export class ConcretePrototype extends Prototype {
    constructor(x: string, y: string, z: string) {
        super()
        this.x = x
        this.y = y
        this.z = z
    }

    public clone(): Prototype {
        const prototype: Prototype = new ConcretePrototype(
            this.x,
            this.y,
            this.z
        )

        return prototype
    }
}
