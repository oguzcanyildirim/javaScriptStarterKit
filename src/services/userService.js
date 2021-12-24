export default class UserService {
    constructor() {
        this.users = []
    }

    add(user) {
        //this would be a point in which we send a request to an api
        this.users.push(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }

}