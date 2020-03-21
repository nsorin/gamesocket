import Repository from "./common/Repository"
import User from "./user/User"
import Identifiable from "./common/Identifiable"

/**
 * @class Room
 * Abstraction for the concept of Room in SocketIO. Used to keep track of the users in the room
 * and execute specific actions related to the room.
 */
export default abstract class Room implements Identifiable {
    
    protected _users: Repository<User> = new Repository<User>()

    get capacity(): number {
        return this._capacity
    }

    constructor(protected _name: string, protected _capacity: number) {}

    /**
     * The key is the room name
     */
    public getKey(): string {
        return this._name
    }

    /**
     * Try adding a user to the room. Return true if successful, false if not.
     * @param user The user to add
     */
    public addUser(user: User): boolean {
        if (this._users.count >= this._capacity) {
            return false
        }
        user.join(this._name)
        this._users.put(user)
        return true
    }

    /**
     * Try removing a user from the room. Return true if successful, false if not.
     * @param user The user to add
     */
    public removeUser(user: User): boolean {
        if (this._users.pull(user.getKey())) {
            user.leave(this._name)
            return true
        }
        return false
    }
}