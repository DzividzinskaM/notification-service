const amqp = require('amqplib');

const produce = async () => {
    const amqpServer = 'amqp://pets:pets@localhost:5672';
    //const amqpServer = 'amqp://pets:pets@10.20.1.180:5672';
    //const amqpServer = 'amqp://pets:pets@my-release-rabbitmq:5672';
    const conn = await amqp.connect(amqpServer);
    const ch = await conn.createChannel();
    const exch = 'test_exchange';
    const q = 'lab3';
    const rkey = 'test_route';
    const msg = 'test for lab 3';
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