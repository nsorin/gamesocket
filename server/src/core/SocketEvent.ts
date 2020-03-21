import SocketIO from 'socket.io'
import User from './user/User'

export default abstract class SocketEvent {

    private _name: string = null

    constructor(name: string) {
        this._name = name
    }
    
    get name(): string {
        return this._name
    }

    public abstract handle(data: Object, io: SocketIO.Server, user: User): void;

}