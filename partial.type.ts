// Partial Type allow used type but with optional properties (:?)

interface PartialType {
    id: number;
    name: string;
    nickName: string;
}

function printPerson(args: Partial<PartialType>) {
    console.log('args: ', args);
}

printInput({ id: 1 })
printInput({ name: 1 })
printInput({ id: 1, nickName: "Cris" })