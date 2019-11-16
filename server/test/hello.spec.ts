import { expect } from "chai"
import Hello from "../src/hello"

describe("Hello", () => {
    
    describe("sayHello", () => {
        it("Should return Hello World!", () => {
            let hello: Hello = new Hello()
            expect(hello.sayHello()).to.equal("Hello World!")
        })
    })
})