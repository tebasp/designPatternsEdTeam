// Proxy

import { IServer } from './IServer'

export class ProxyServerConnection implements IServer {
    private _server: IServer

    constructor(server: IServer) {
        // Key, keeps the reference to the real server
        this._server = server
    }

    // Virtual Proxy
    // Validates protocol before connecting to de real server
    connect(host: string): void {
        if (this.validateProtocol(host)) {
            this._server.connect(host)
        } else {
            throw new Error('Protocol not supported')
        }
    }

    validateProtocol(host: string): boolean {
        return host.startsWith('https')
    }
}
