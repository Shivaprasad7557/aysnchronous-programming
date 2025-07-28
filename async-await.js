
// promise is created

let promise = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve("Hello I will come after 5 seconds")
    },5000)

})
// after first console.log get function will be suspended for 5 seconds

async function get(){
    console.log("Hello I am available now")
    let datapromise = await promise    
    console.log(datapromise)
}

// until 5 seconds whatever function , code  after get function will be executed 

async function get2(){
    await setTimeout(()=>{
        console.log("Hello I am ok")
    },3000)
}

get()
get2()

/* first get function is called and hello I am available now is printed and get function suspended from the callstack

   and get2 function is executed and that is also an async function so it is also suspended

   from the callstack for 3 seconds and after 3 seconds get2 will come to callstack and Hello I am ok 

   is printed and after 5 seconds get will come to callstack and Hello I will come after 5 seconds is printed */ 