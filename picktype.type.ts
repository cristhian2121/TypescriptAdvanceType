// Pick<T, K> type  allow create other type "K" starting with some "T" properties 

interface PickType {
    id: number;
    name: string;
    nickName: string;
}

function printType(args: Pick<PickType, 'id' | "name">) {
    console.log('args: ', args);
}

printType({ name: "cris", id: 1})
