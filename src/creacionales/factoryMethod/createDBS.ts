import { DBFactory } from './DBFactory'
import { DBEnum } from './dbEnum'

export function createDBS() {
    const mySQLAdapter = DBFactory.getAdapter(DBEnum.MySQL)
    mySQLAdapter.connect('mysql://localhost:3306')

    const postgreAdapter = DBFactory.getAdapter(DBEnum.POSTGRE)
    postgreAdapter.connect('postgre://localhost:5432')
}

createDBS()
