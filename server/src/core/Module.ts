import SocketIO from 'socket.io'
import SocketEvent from './SocketEvent';
import UserManager from './user/UserManager';
import User from './user/User';
import Room from './Room';

/**
 * @class Module
 * A Module is a group of event listeners related to a single functionality of the application.
 * Modules are designed to be independant from each other.
 * They should only depend on the "core" files.
 * Modules are registered in the index.ts entrypoint, before the starting the server.
 */
export default abstract class Module {
    
    protected _events: Array<SocketEvent> = []
    
    constructor(protected _name: string) {}

    /**
     * Listen to all events of this namespace
     * @param io SocketIO Server
     */
    public listenForEvents(io: SocketIO.Server): void {
        io.on('connection', (socket: SocketIO.Socket) => {

            this.onConnect(io, socket)

            for (let i in this._events) {
                socket.on(this._events[i].name, (data: Object) => {
                    let user = UserManager.getInstance().resolve(socket)
                    let room = this.resolveUserRoom(user);
                    this._events[i].handle(data, io, user, room)
                })
            }

            socket.on('disconnect', () => {
                this.onDisconnect(io, socket)
            })
        })
    }

    /**
     * This method is called when a user connects for the first time.
     * @param io SocketIO Server
     * @param socket Socket from which the connect event originates
     */
    protected abstract onConnect(io: SocketIO.Server, socket: SocketIO.Socket): void

    /**
     * This method is called when a user disconnects.
     * @param io SocketIO Server
     * @param socket User from which the disconnect event originates
     */
    protected abstract onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket): void

    /**
     * Resolve the room the user is in. Different module can have different ways of handling rooms,
     * hence the need for an abstract method. There might also be only one room for all users.
     * @param user The corresponding user
     */
    protected abstract resolveUserRoom(user: User): Room;
}