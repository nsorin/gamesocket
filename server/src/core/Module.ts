import SocketIO from 'socket.io'
import SocketEvent from './SocketEvent';

export default abstract class Module {
    
    protected _namespace: string = null
    protected _events: Array<SocketEvent> = []
    
    constructor(namespace: string) {
        this._namespace = namespace
    }

    /**
     * Listen to all events of this namespace
     * @param io SocketIO Server
     */
    public listenForEvents(io: SocketIO.Server): void {
        io.of(`/${this._namespace}`).on('connection', (socket: SocketIO.Socket) => {

            this.onConnect(io, socket)

            for (let i in this._events) {
                socket.on(this._events[i].name, (data: Object) => {
                    this._events[i].handle(data, io, socket)
                })
            }

            socket.on('disconnect', () => {
                this.onDisconnect(io, socket)
            })
        })
    }

    protected abstract onConnect(io: SocketIO.Server, socket: SocketIO.Socket): void

    protected abstract onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket): void
}