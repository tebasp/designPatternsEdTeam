// Creador - Creador concreto

import { IDBAdapter } from './IDBAdapter'
import { MySQLAdapter } from './MySQLAdapter'
import { PostgreAdapter } from './PostgreAdapter'
import { DBEnum } from './dbEnum'

export class DBFactory {
    static getAdapter(type: DBEnum): IDBAdapter {
        switch (type) {
            case DBEnum.MySQL:
                return new MySQLAdapter()
            case DBEnum.POSTGRE:
                return new PostgreAdapter()
            default:
                throw new Error('No existe el adaptador')
        }
    }
}
