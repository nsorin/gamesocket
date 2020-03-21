import {Socket} from 'socket.io'
import Identifiable from '../common/Identifiable'

export default class User implements Identifiable {

    constructor(private _socket: Socket, private _name: string) {}

    public getKey(): string {
        return this._socket.id
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get socket(): Socket {
        return this._socket
    }

    /**
     * Make the user join a room
     * @param roomName Name of the Sockt.io room
     */
    public join(roomName: string): void {
        this._socket.join(roomName)
    }

    /**
     * Make the user leave a room
     * @param roomName Name of the Sockt.io room
     */
    public leave(roomName: string): void {
        this._socket.leave(roomName)
    }
}