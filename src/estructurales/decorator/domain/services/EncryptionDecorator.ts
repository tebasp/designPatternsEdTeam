// Concrete Decorator

import { DataSource } from '../interfaces/DataSource'
import { DataSourceDecorator } from './DataSourceDecorator'

export class EncryptionDecorator extends DataSourceDecorator {
    constructor(wrapee: DataSource) {
        super(wrapee)
    }

    writeData(): void {
        // Here we pass encrypted data
        // So it's decorated
        super.writeData(this.encrypt(super.readData()))
    }

    readData(): string {
        return this.decrypt(super.readData())
    }

    encrypt(data: string): string {
        return `Encrypted ${data}`
    }

    decrypt(data: string): string {
        return `Decrypted ${data}`
    }
}
