// OS Module 

const os = require('os')

// info about current user 

const user = os.userInfo()
console.log(user)



// method returns the system uptime in seconds 


console.log(`The System Uptime is ${os.uptime()} seconds`)



const currentOS = { 
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(),  // Correct method name is totalmem (lowercase 'm')
    freeMem: os.freemem(), 
  };


console.log(currentOS)