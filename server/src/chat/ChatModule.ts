import Module from '../core/Module';
import MessageEvent from './events/MessageEvent'


export default class ChatModule extends Module {

    constructor() {
        super('')
        this._events.push(new MessageEvent())
    }

    protected onConnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Connected to chat")
    }

    protected onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Disconnected from chat")
    }
}