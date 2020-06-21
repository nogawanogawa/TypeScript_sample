function greet1(name: string){
    return "hello " + name
}

let greet2 = function(name: string){
    return "hello " + name
}

let greet3 = (name: string) => {
    return "hello " + name
}

let greet4 = (name: string) => 
    "hello " + name

console.log(greet1("mike"))
console.log(greet2("john"))
console.log(greet3("bob"))
console.log(greet4("tom"))


let greet5 = function(name: string, family?:string){
    return "hello " + name + " " + family
}

console.log(greet5("tom"))
console.log(greet5("tom", "sam"))
