import Room from "../Room";

/**
 * @class GameRoom
 * Specific type of Room which contains a game's logic.
 * Games need a minimum amount of users in them to start.
 */
export default abstract class GameRoom extends Room {

    /**
     *  Minimum amount of users in the Game Room to start the game 
     */   
    protected _minCapacity: number
    
    get open(): boolean {
        return this._users.count <= this._capacity
    }
    
    constructor(name: string, capacity: number, minCapacity: number) {
        super(name, capacity)
        this._minCapacity = minCapacity
    }

}