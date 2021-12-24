export class BaseLogger {
    log(data) {
        console.log("Default logger" + data)
    }
}

//logger for elasticsearch, needs elastic env
export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}