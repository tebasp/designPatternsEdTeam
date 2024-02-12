import { FileDataSource } from '../domain/models/FileDataSources'
import { EncryptionDecorator } from '../domain/services/EncryptionDecorator'

export function handler() {
    const fileSource = new FileDataSource()
    fileSource.writeData('Hello World')
    console.log(fileSource.readData())

    const encrypted = new EncryptionDecorator(fileSource)
    encrypted.writeData()
    console.log(encrypted.readData())
}

handler()
