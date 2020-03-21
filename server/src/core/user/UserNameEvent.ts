import SocketEvent from "../SocketEvent";
import User from "./User";

export default class UserNameEvent extends SocketEvent {
    constructor() {
        super('userName')
    }

    /**
     * This event allows user to change their name
     * @param data Event data
     * @param io IO Server
     * @param user Reference to the corresponding user
     */
    public handle(data: any, io: SocketIO.Server, user: User): void {
        console.log('Set user name:', data)
        let name = data.name
        if (name) {
            user.name = name
        }
    }
}