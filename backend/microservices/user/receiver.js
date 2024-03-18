const amqplib = require('amqplib');
const exchangename = 'authExchange';

const receiveMsg = async() => {
    const connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertExchange(exchangename, 'fanout', {durable: false});
    const q = await channel.assertQueue('', {exclusive: true});
    console.log("queue name : ", q.queue);
    channel.bindQueue(q.queue, exchangename, ''); // routing key
    channel.consume(q.queue, msg => {
        if(msg.content) console.log(" the message is : ", msg.content.toString());

    })
}

receiveMsg();