let mymod = require('./module')

let flight = mymod.ticket


let user1 = new flight(1)
user1.setSeatNum(223)
user1.setflightNum(10)
user1.settravelDate('26-12-2023')
user1.setdepArr('cairo' , 'australia')

console.log(user1.getflightNum())
console.log(user1.getSeatNum())
console.log(user1.gettravelDate())
console.log(user1.getdepArr())
console.log(user1.displayAllData())

let user2 = new flight(100)
user2.setSeatNum(23)
user2.setflightNum(5)
user2.settravelDate('06-12-2022')
user2.setdepArr('spain' , 'australia')

console.log(user2.getflightNum())
console.log(user2.getSeatNum())
console.log(user2.gettravelDate())
console.log(user2.getdepArr())
console.log(user2.displayAllData())

