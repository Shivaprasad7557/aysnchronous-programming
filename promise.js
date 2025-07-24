
// console logs will be synchronous and runs without any flaws

console.log("start")

// create a promise by using a constructor Promise() and it contains a callback have two functions resolve and reject

let promise = new Promise((resolve,reject)=>{

    // if the condition is true it resolves or it rejects and for now there is no condition so it rejects the promise
   
    if(condition){
        resolve("Success")
    }
    else{
        reject("Failure")
    }
})

// whenever promise is created it is in pending state  and whenever we are using then or catch to judge it was resolved or rejected

promise.then((data)=>{
   console.log(data)
})
.catch((error)=>{
   console.log(error)
})
.finally(()=>{
    console.log("Finally done")
})

// finally is used to fulfill the promise

console.log("End")