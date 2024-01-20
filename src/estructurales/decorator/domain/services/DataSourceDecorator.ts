// Abstract Decorator

import { DataSource } from '../interfaces/DataSource'

export abstract class DataSourceDecorator implements DataSource {
    protected _wrappee: DataSource

    constructor(wrappee: DataSource) {
        this._wrappee = wrappee
    }

    writeData(data: string): void {
        this._wrappee.writeData(data)
    }

    readData(): string {
        return this._wrappee.readData()
    }
}
