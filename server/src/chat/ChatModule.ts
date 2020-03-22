import Module from '../core/Module';
import MessageEvent from './events/MessageEvent'
import User from '../core/user/User';
import Room from '../core/Room';


export default class ChatModule extends Module {

    constructor() {
        super('chat')
        this._events.push(new MessageEvent())
    }

    protected onConnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Connected to chat:", socket.id)
    }

    protected onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Disconnected from chat")
    }

    protected resolveUserRoom(user: User): Room {
        return null
    }
}