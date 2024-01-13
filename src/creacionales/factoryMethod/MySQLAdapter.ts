// Producto concreto

import { IDBAdapter } from './IDBAdapter'

export class MySQLAdapter implements IDBAdapter {
    connect(connectionString: string): void {
        console.log(`Conectando a MySQL ${connectionString}`)
    }
}
