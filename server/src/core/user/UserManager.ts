import Repository from "../common/Repository";
import User from "./User";
import { Socket } from "socket.io";

const ANONYMOUS_NAME: string = '[anonymous]'

export default class UserManager {
    
    private static _instance: UserManager;

    public static getInstance() {
        if (!UserManager._instance) {
                UserManager._instance = new UserManager()
        }
        return UserManager._instance
    }

    private _users: Repository<User> = new Repository<User>()

    private constructor(){}

    /**
     * Find or create a user for a socket
     * @param socket The user's socket
     */
    public resolve(socket: Socket): User {
        let user = this.find(socket.id)

        if (!user) {
            user = this.add(socket)
        }

        return user
    }

    /**
     * Create a user, add it to the manager and return it
     * @param socket 
     * @param name 
     */
    public add(socket: Socket, name: string = ANONYMOUS_NAME): User {
        let user = new User(socket, name)
        this._users.put(user)
        return user
    }

    /**
     * Find a user by its socket id
     * @param socketId 
     */
    public find(socketId: string): User {
        return this._users.get(socketId)
    }

    /**
     * Find a user by its socket id
     * @param socketId 
     */
    public findByName(name: string): User {
        return this._users.findBy('name', name)
    }

    /**
     * Remove a user by its socket id
     * @param socketId 
     */
    public delete(socketId: string): User {
        return this._users.pull(socketId)
    }
}