import Module from '../core/Module';
import MessageEvent from './events/MessageEvent'


export default class ChatModule extends Module {

    constructor() {
        super('chat')
        this._events.push(new MessageEvent())
    }

    protected onConnect(socket: SocketIO.Socket) {
        console.log("Connected to chat")
    }

    protected onDisconnect(socket: SocketIO.Socket) {
        console.log("Disconnected from chat")
    }
}