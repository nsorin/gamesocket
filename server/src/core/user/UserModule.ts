import Module from "../Module";
import User from "./User";
import UserNameEvent from "./UserNameEvent";
import Room from "../Room";

/**
 * @class UserModule
 * Module dedicated to user management (used by the user to update their own info)
 */
export default class UserModule extends Module {
    
    constructor() {
        super('')
        this._events.push(new UserNameEvent())
    }

    protected onConnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Connected to user module")
    }

    protected onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        console.log("Disconnected from user module")
    }

    protected resolveUserRoom(user: User): Room {
        return null
    }
}