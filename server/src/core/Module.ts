import SocketIO from 'socket.io'
import SocketEvent from './SocketEvent';
import UserManager from './user/UserManager';
import User from './user/User';

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

            let user = UserManager.getInstance().resolve(socket)
            
            this.onConnect(io, user)

            for (let i in this._events) {
                socket.on(this._events[i].name, (data: Object) => {
                    this._events[i].handle(data, io, user)
                })
            }

            socket.on('disconnect', () => {
                this.onDisconnect(io, user)
            })
        })
    }

    protected abstract onConnect(io: SocketIO.Server, user: User): void

    protected abstract onDisconnect(io: SocketIO.Server, user: User): void
}