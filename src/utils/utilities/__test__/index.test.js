import { functionWithCache, pipeFromObj as pipe, getFromObj as get } from "..";

describe('function with cache', () => {
    describe('passing a not valid param', () => {
        it('it should throw an error', () => {
            expect(() => functionWithCache('() => { }')).toThrowError()
        })
    })

    describe('passing a valid param type function', () => {
        it('should return a function', () => {
            expect(typeof functionWithCache(() => { })).toEqual('function');
        })
        describe('testing the return function', () => {
            it('it should return an especific value', () => {
                const sum = functionWithCache((a, b) => a + b);
                const a = 5, b = 7, total = a + b;
                expect(sum(a, b)).toEqual(total);
            })
        })
    })
})

const state = {
    lists: {
        toDoList: ['a', 'b']
    }
}

describe('get function', () => {
    describe('passing a not valid param', () => {
        it('it should throw an error', () => {
            expect(() => get([])).toThrowError()
        })
    })

    describe('passing a valid param type function', () => {
        it('should return a function', () => {
            expect(typeof get('a')).toEqual('function');
        })
        describe('testing the return function', () => {
            it('it should return an especific value', () => {
                const getList = get('lists');
                expect(getList(state)).toEqual(state.lists);
            })
        })
    })
})

describe('pipe function', () => {
    describe('passing a not valid param', () => {
        it('it should throw an error', () => {
            expect(() => pipe('() => { }')(1)).toThrowError()
        })
    })

    describe('passing a valid param type function', () => {
        it('should return a function', () => {
            expect(typeof pipe(() => { })).toEqual('function');
        })
        describe('testing the return function', () => {
            it('it should return an especific value', () => {
                const getList = get('lists');
                const getToDoList = pipe(
                    getList,
                    get('toDoList')
                );
                expect(getToDoList(state)).toEqual(state.lists.toDoList);
            })
        })
    })
})