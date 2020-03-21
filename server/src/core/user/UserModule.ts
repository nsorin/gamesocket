import Module from "../Module";
import User from "./User";
import UserNameEvent from "./UserNameEvent";

export default class UserModule extends Module {
    
    constructor() {
        super('')
        this._events.push(new UserNameEvent())
    }

    protected onConnect(io: SocketIO.Server, user: User) {
        console.log("Connected to user module")
    }

    protected onDisconnect(io: SocketIO.Server, user: User) {
        console.log("Disconnected from user module")
    }
}