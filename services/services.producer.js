const amqp = require('amqplib');

const produce = async (messageInput) => {
    //const amqpServer = 'amqp://pets:pets@localhost:5672';
    //const amqpServer = 'amqp://pets:pets@10.20.1.180:5672';
    const amqpServer = 'amqp://pets:pets@my-release-rabbitmq:5672';
    const conn = await amqp.connect(amqpServer);
    const ch = await conn.createChannel();
    const exch = 'test_exchange';
    const q = 'm_pets';
    const rkey = 'test_route';
    const msg = messageInput;
    await ch
        .assertExchange(exch, 'direct', {
            durable: true
        })
        .catch(console.error);
    await ch.assertQueue(q, {
        durable: true
    });
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg));
    setTimeout(function () {
        ch.close();
        conn.close();
    }, 500);
};

module.exports = {
    produce,
};