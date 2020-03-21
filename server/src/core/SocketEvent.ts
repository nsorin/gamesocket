import SocketIO from 'socket.io'
import User from './user/User'
import Room from './Room'

/**
 * @class SocketEvent
 * Definition of a specific event. Does NOT represent an individual event, but rather
 * the handler for all the events of a specific type.
 */
export default abstract class SocketEvent {

    private _name: string = null

    constructor(name: string) {
        this._name = name
    }
    
    get name(): string {
        return this._name
    }

    public abstract handle(data: Object, io: SocketIO.Server, user: User, room: Room): void;

}