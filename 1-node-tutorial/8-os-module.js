const os = require('os');

//user info
const userInfo = os.userInfo()
console.log(userInfo)

//system uptime
console.log(`The system uptime is ${os.uptime()} seconds`)

//current OS
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOs)
