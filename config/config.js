module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://127.0.0.1/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: '', // url db mongoDB
        app: {
            name: 'graphql'
        }
    }
};
