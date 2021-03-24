// Intersection Types
/*
* A interception types is a type that combine multiple types in one
*/

type Man = {
    id: number
    name: string
}

type Dog = {
    id: number
    nickName: string
}

type Friend = Man & Dog;

const gohan: Friend = {
    id: 1,
    name: "Gohan",
    nickName: "Barbas"
}
