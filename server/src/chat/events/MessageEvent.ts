import SocketIO from 'socket.io'
import SocketEvent from "../../core/SocketEvent";
import User from '../../core/user/User';
import Room from '../../core/Room';

export default class MessageEvent extends SocketEvent {

    constructor() {
        super('message')
    }

    public handle(data: any, io: SocketIO.Server, user: User, room: Room): void {
        console.log('received message:', data)
        let result: any = {
            content: data.content,
            author: user.name
        }
        io.emit('message', result)
    }
}