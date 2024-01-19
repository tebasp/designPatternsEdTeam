import { ProxyServerConnection } from '../ProxyServerConnection'
import { ServerConnection } from '../ServerConnection'

export function handler() {
    const server = new ServerConnection()
    // Pass the real server to the proxy
    const serverProxy = new ProxyServerConnection(server)

    // Call the proxy not the real server
    serverProxy.connect('https://www.google.com')
}

handler()
