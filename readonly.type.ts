// Readonly is used when you no requiere reassing after to created

interface ReadonlyType {
    id: number;
    name: string;
}

interface ReadonlyProperty {
    id: number;
    readonly name: string;
}

function printType(args: Readonly<ReadonlyType>){
    args.name = "Cris"; // ERROR because args is readonly
    console.log('args: ', args);
}

printType({ id: 1, name: "roshi"})
