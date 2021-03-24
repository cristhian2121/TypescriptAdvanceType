// omit is opositive to pick, it omit properties from a Type

interface OmitType {
    id: number
    name: string
    nickName: string
  }
  
  function printType(args: Omit<OmitType, "name" | "id">) {
    console.log(args)
  }
  
  printType({ nickName: "Cris" })