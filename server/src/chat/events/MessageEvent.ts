import SocketIO from 'socket.io'
import SocketEvent from "../../core/SocketEvent";

export default class MessageEvent extends SocketEvent {

    constructor() {
        super('message')
    }

    public handle(data: Object, io: SocketIO.Server, socket: SocketIO.Socket): void {
        console.log('received message:', data)
        io.emit('message', data)
    }
}