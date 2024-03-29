import {expect, test} from "vitest"

import {sayHello} from "../src/index.js"

test("says hello world", () => {
    expect(sayHello()).toEqual("Hello, world!")
})

test("says hello brad", () => {
    expect(sayHello("Brad")).toEqual("Hello, Brad!")
})
