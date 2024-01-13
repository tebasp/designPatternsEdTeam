import { MySingleton } from './MySingleton'

function testSingleton() {
    const singleton1 = MySingleton.getInstance('Singleton 1')
    const singleton2 = MySingleton.getInstance('Singleton 2')

    console.log(singleton1.name)
    console.log(singleton2.name)
}

testSingleton()
