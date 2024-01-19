import { ConcretePrototype } from './ConcretePrototype'

export function handler() {
    const prototype = new ConcretePrototype('x', 'y', 'z')

    // Luego de clonarlos se pueden personalizar
    // Util cuando el objeto es complejo de crear o tiene muchas propiedades
    // Ya no se cambian todas la props pasando al constructor, solo se personaliza con los setters
    const prototypeTwo = prototype.clone()
    prototypeTwo.setX('x2')

    const prototypeThree = prototype.clone()
    prototypeThree.setX('x3')

    console.log('\nPrototype:', prototype)
    console.log('\nPrototype 2:', prototypeTwo)
    console.log('\nPrototype 3:', prototypeThree)
}

handler()
