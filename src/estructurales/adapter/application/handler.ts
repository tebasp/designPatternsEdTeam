import { IProduct } from '../domain/interfaces/IProduct'
import { BookProduct } from '../domain/models/BookProduct'
import { DigitalBookProduct } from '../domain/models/DigitalBookProduct'
import { DigitalBookProductAdapter } from '../domain/services/DigitalBookProductAdapter'

export function handler() {
    const bookOne: IProduct = new BookProduct('Book One')
    bookOne.sell()

    // Adaptee instantiated
    const digitalBook = new DigitalBookProduct('Digital Book One')
    // Set to the adapter
    const digitalBookAdapter: IProduct = new DigitalBookProductAdapter(
        digitalBook
    )
    //  Call the adapter
    digitalBookAdapter.sell()
}

handler()
