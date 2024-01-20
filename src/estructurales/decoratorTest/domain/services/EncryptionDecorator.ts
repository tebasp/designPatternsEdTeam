import { DataSource } from '../interfaces/DataSource'
import { DataSourceDecorator } from './DataSourceDecorator'

export class EncryptionDecorator extends DataSourceDecorator {
    constructor(wrappe: DataSource) {
        super(wrappe)
    }

    write(data: string) {
        // We make something before
        const encrypted = this.encrypt(data)
        super.write(encrypted)
    }

    read() {
        const data = super.read()
        // We make something after
        return this.decrypt(data)
    }

    encrypt(data: string): string {
        return `Encrypted ${data}`
    }

    decrypt(data: string): string {
        return `Decrypted ${data}`
    }
}
