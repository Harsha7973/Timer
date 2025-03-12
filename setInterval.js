let count = 0
function test(){
    count++
    if(count > 5){
        clearInterval(interval)
    }
    console.log(`Hello ${count} \n`)
}

const interval = setInterval(test,1000)
