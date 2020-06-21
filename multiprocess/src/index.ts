setTimeout(()=> console.log("A"), 1)
setTimeout(()=> console.log("B"), 2)
console.log("C")

//


function PromiseA() {
    return new Promise(function(resolve) {
        setTimeout(function() {resolve("A")}, 1)
    })
  }


  function PromiseB() {
    return new Promise(function(resolve) {
        setTimeout(function() {resolve("B")}, 2)
    })
  }


async function myAsync() {
 
    console.log(await PromiseA())
    console.log(await PromiseB())
    console.log("C")
 
}
 
myAsync();