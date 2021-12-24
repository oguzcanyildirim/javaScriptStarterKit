import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let userService = new UserService()

let user1 = new User(1, "Oguzcan", "Yildirim", "Ankara")
let user2 = new User(2, "Haydar", "Haydari", "Mugla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))
