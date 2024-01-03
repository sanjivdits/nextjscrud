export const ENV = {
    databaseDetail: {
        type: 'mysql',
        host: "localhost",
        username: "root",
        password: "Dev@12345#",
        database: "nodedb",
        entities: [__dirname + "/../**/*.entity{.ts, .js}"],
        synchronize: true
    }
}