class Dog {
    constructor(
        public name :string,
        public num : number,
        private bark: string
    ){}
    res(){
        console.log(this.bark);
    }
}

let poti = new Dog("dog", 2, "bowwow")

console.log(poti.name)
console.log(poti.num)
poti.res()

////////

interface Sushi {
    calories : number,
    salty : number,
    tasty: number
}

class magro implements Sushi{
    calories = 3
    salty = 4
    tasty = 5
}

let sushi = new magro()

console.log(sushi.calories)
console.log(sushi.salty)
console.log(sushi.tasty)

