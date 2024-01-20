import { FileDataSource } from '../domain/models/FileDataSource'
import { EncryptionDecorator } from '../domain/services/EncryptionDecorator'

export function handler() {
    const fileSource = new FileDataSource()
    const encryptedSource = new EncryptionDecorator(fileSource)

    encryptedSource.write('Some data')
    const readData = encryptedSource.read()
    console.log(readData)
}

handler()
