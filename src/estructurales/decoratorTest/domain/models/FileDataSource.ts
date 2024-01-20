import { DataSource } from '../interfaces/DataSource'

export class FileDataSource implements DataSource {
    private _data: string

    constructor() {
        this._data = ''
    }

    write(data: string): void {
        this._data = data
    }

    read(): string {
        return this._data
    }
}
