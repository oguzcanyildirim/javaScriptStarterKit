import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Oguzcan", "Yildirim", "Ankara")
let user2 = new User(2, "Haydar", "Haydari", "Mugla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))
