import Identifiable from "./Identifiable";

export default class Repository<T extends Identifiable> {
    private _items: {[key: string]: T} = {}

    /**
     * Get the amount of items in the repository
     */
    public get count(): number {
        return Object.keys(this._items).length
    }

    /**
     * Add or replace an item in the repository
     * @param item The item to add
     */
    public put(item: T) {
        this._items[item.getKey()] = item
    }

    /**
     * Get a reference to an item in the repository
     * @param key The key of the identifiable item
     */
    public get(key: string): T {
        return this._items[key]
    }

    /**
     * Find an item by a specific attribute
     * @param attribute Attribute to check
     * @param value Desired value
     */
    public findBy(attribute: string, value: any): T {
        for (let key in this._items) {
            if (this._items.hasOwnProperty(key) && this._items[key][attribute] === value) {
                return this._items[key]
            }
        }

        return undefined
    }

    /**
     * Pull an item from the repository, removing it from the list
     * 
     * @param key The key of the identifiable item
     */
    public pull(key: string): T {
        let item = this._items[key]
        delete this._items[key]
        return item
    }
}