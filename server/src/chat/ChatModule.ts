import Module from '../core/Module';
import MessageEvent from './events/MessageEvent'
import User from '../core/user/User';


export default class ChatModule extends Module {

    constructor() {
        super('')
        this._events.push(new MessageEvent())
    }

    protected onConnect(io: SocketIO.Server, user: User) {
        console.log("Connected to chat")
    }

    protected onDisconnect(io: SocketIO.Server, user: User) {
        console.log("Disconnected from chat")
    }
}