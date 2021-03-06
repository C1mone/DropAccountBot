var Winston = require('winston');

module.exports = new(Winston.Logger)({
    transports: [
        new(Winston.transports.Console)({
            level: 'debug',
            json: false,
            timestamp: true,
            prettyPrint: true,
            colorize: true
        }),
        new (Winston.transports.File)({ filename: __dirname + '/../dropbot.log', json: true})
    ]
});
