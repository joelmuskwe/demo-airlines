import * as categories_facade from "./categories.facade"

// @ponicode
describe("loadAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new categories_facade.CategoriesFacade(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.loadAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})
