import SocketIO from 'socket.io'
import Module from './Module'

export default class Server {
    
    private _io: SocketIO.Server
    private _port: number
    private _modules: Array<Module> = []

    constructor(port: number) {
        this._port = port
        this._io = SocketIO(this._port)
    }

    /**
     * Add a module to the server
     * @param module The module to add
     */
    public addModule(module: Module): void {
        this._modules.push(module)
    }

    /**
     * Listen for events on all namespaces
     */
    public listenForEvents(): void {
        for (let i in this._modules) {
            this._modules[i].listenForEvents(this._io)
        }
    }
}