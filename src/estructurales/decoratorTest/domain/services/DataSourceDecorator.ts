import { DataSource } from '../interfaces/DataSource'

export abstract class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource

    constructor(wrappee: DataSource) {
        this.wrappee = wrappee
    }

    write(data: string): void {
        this.wrappee.write(data)
    }

    read(): string {
        return this.wrappee.read()
    }
}
