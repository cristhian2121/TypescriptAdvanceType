/*
* Generic types is used when you need reusing a given type.
*/

function printInput<T>(input: T) {
    console.log('input: ', input);
}

printInput("I'm string")
printInput(1)
printInput(new Date)

// Or

interface GenericType<T> {
    id: number
    name: T
}

function printFenericType(args: GenericType<string>) {
    console.log(args)
}

printFenericType({ id: 1, name: "My name is Cris" }) // Output: {id: 1, name: "My name is Cris"}

function showTypeTwo(args: GenericType<number>) {
    console.log(args)
}

showTypeTwo({ id: 1, name: 2 }) // Output: {id: 1, name: 2}

