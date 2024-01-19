// Real Subject

import { IServer } from './IServer'

export class ServerConnection implements IServer {
    connect(host: string): void {
        console.log(`Connecting to ${host}`)
    }
}
