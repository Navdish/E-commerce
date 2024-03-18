const amqplib = require('amqplib');
// const amqplib = require('amqplib');
// const exchangename = 'exg';

// const receiveMsg = async() => {
//     const connection = await amqplib.connect('amqp://localhost');
//     const channel = await connection.createChannel();
//     await channel.assertExchange(exchangename, 'fanout', {durable: false});
//     const q = await channel.assertQueue('', {exclusive: true});
//     console.log("queue name : ", q.queue);
//     channel.bindQueue(q.queue, exchangename, ''); // routing key
//     channel.consume(q.queue, msg => {
//         if(msg.content) console.log(" the message is : ", msg.content.toString());

//     })
// }

// const msg = 'message';
const exchangeName = 'authExchange';


exports.sentMsg = async({name, email, password}) => {
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange(exchangeName, 'fanout', {durable: false});
        const msg = {name, email, password};
        channel.publish(exchangeName, '', Buffer.from(JSON.stringify(msg)));
        console.log("sent", msg);
    } catch (error) {
        console.log(error, "connection not created..");
    }
}

// 1 exchange with different signature
// 1 connection with different channels


// receiveMsg();