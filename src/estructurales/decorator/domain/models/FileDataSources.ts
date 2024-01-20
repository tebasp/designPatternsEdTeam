// Componente Concreto

import { DataSource } from '../interfaces/DataSource'

export class FileDataSource implements DataSource {
    private _data: string

    writeData(data: string): void {
        console.log(`Writing data: ${data}`)
        this._data = data
    }

    readData(): string {
        return this._data
    }
}
