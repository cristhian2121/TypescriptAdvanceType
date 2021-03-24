// Required is de opositive to partial, because all properties are required
interface RequiredType {
    id: number;
    name?: string;
    nickName?: string;
}

function printType(args: Required<RequiredType>) {
    console.log('args: ', args);
}

printType({ id: 1, nickName: "Cris" }) // Error for propertie name is required
printType({ id: 1, name: "roshi", nickName: "Cris" })