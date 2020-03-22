import Module from "../Module";
import Repository from "../common/Repository";
import GameRoom from "./GameRoom";
import User from "../user/User";
import UserManager from "../user/UserManager";

/**
 * @class GameModule
 * Specific type of Module for a game. Game modules need to manage a number of game rooms and
 * now which user is in which room.
 */
export default abstract class GameModule extends Module{

    protected _rooms: Repository<GameRoom>

    protected _userInRoom: {[userKey: string]: string}

    /**
     * Return the room the user is in, if any.
     * @param user The desired user
     */
    protected resolveUserRoom(user: User): GameRoom {
        let roomKey = this._userInRoom[user.getKey()]

        if (roomKey) {
            return this._rooms[roomKey]
        }

        return null
    }

    /**
     * Handle Connection - Send the list of currently open game rooms
     * @param io The SocketIO Server
     * @param socket The socket which just connected
     */
    protected onConnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        let openRooms = this._rooms.findAllBy('open', true)
        socket.emit(this._name + '-openRooms', {openRooms})
    }

    /**
     * Handle disconnection - remove user from room
     * @param io The SocketIO Server
     * @param socket The socket which just disconnected
     */
    protected onDisconnect(io: SocketIO.Server, socket: SocketIO.Socket) {
        let user = UserManager.getInstance().find(socket.id)
        
        if (user) {
            let room = this.resolveUserRoom(user)
            if (room) {
                room.removeUser(user)
            }
        }
    }
}