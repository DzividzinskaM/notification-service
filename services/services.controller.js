const axios = require('axios');
const Producer = require('./services.producer');

function produceMessage(ctx) {
    ctx.body = ctx.params.pet;
    Producer.produce(ctx.params.pet)
}

module.exports = {
    produceMessage,
};