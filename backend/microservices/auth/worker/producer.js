const amqp = require('amqplib');
const exchangeName = 'userExchange';
const { v4: uuidv4 } = require('uuid');

class Producer {
    channel;

    async createChannel() {
        try {
            const connection = await amqp.connect('amqp://localhost');
            this.channel = await connection.createChannel();   
        } catch (error) {
            console.log("channel not created", error);
        }
    }
    async sentMsg(data, signature){
        try {
            if (!this.channel) {
                await this.createChannel()
            }
            await this.channel.assertExchange(exchangeName, 'fanout', {durable: false});
            const user = data;
            const properties = { type: signature };
            const message = { uuid: uuidv4(), user: user, firedAt: new Date()}
            const res = await this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(message)), properties);
            console.log("sent",res,  message);
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }

}
module.exports = Producer;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import amqp from 'amqplib'
// import configRabbit from "../config/rabbitmq.config.js"
// import userProcessor from "../processor/index.js"
// const {registerNewUser} = userProcessor
// const processors = {
//   [process.env.RABBIT_USER_REGISTER_SIGNATURE]: registerNewUser
// };
// async function consumeMessages() {
//     const connection = await amqp.connect("amqp://localhost")
//     const channel = await connection.createChannel();
//     const exchangeName = configRabbit.rabbitMQ.exchangeName;
//     const exchangeType = configRabbit.rabbitMQ.exchangeType;
//     await channel.assertExchange(exchangeName, exchangeType);
//     const q = await channel.assertQueue("usersQueue");
//     await channel.bindQueue(q.queue, exchangeName, "hello");
//     channel.consume(q.queue, async(msg) => {
//       // console.log('msg: ', 'headers: ', msg?.properties?.headers, 'type: ', msg?.properties?.type, '\n');
//       const handle_processor = processors[msg?.properties?.type] || processors[msg?.properties?.headers?.type];
//       if (handle_processor) {
//         try {
//           const data = JSON.parse(msg?.content?.toString());
//           console.log("DATATAATATATA",data.logDetails.message);
//           await handle_processor(data.logDetails.message);
//           channel.ack(msg);
//         } catch (error) {
//           console.log(error.message);
//           channel.nack(msg, false, false);
//         }
//       } else {
//         console.log(`Messages ignore with id: ${msg?.properties?.messageId}`);
//         channel.nack(msg, false, false);
//       }
//         // const data = JSON.parse(msg.content);
//         // console.log(data);
//         // channel.ack(msg);
//     });
// }
// export default consumeMessages;
// [10:58 AM] ----------------------------
// [10:58 AM] import amqp from 'amqplib'
// import configRabbit from "../config/rabbitmq.config.js"
// //  step 1 : connect to the rabbitMq server
// //  step 2 : create new channel on that connection
// //  step 3 : create the exchange
// //  step 4 : publish the message to the exchange with a routing key
// class Producer {
//     channel;
//     async createChannel() {
//         const connection = await amqp.connect('amqp://localhost');
//         this.channel = await connection.createChannel();
//     }
//     // const properties = {
//     //     type: signature
//     //   }
//     async publishMessage(routingKey, message,signature) {
//         if (!this.channel) {
//             await this.createChannel()
//         }
//         const exchangeName = configRabbit.rabbitMQ.exchangeName;
//         const exchangeType = configRabbit.rabbitMQ.exchangeType;
//         await this.channel.assertExchange(exchangeName, exchangeType);
//         const properties = {
//             type: signature
//           };
//         const logDetails = {
//             logType: routingKey,
//             message: message,
//             firedAt: new Date(),
//         }
//         await this.channel.publish(
//             exchangeName,
//             routingKey,
//             Buffer.from(JSON.stringify({ logDetails })),
//             properties
//         );
//         console.log("MESSAGE", message)
//         console.log(`the message ${message.email} is sent to exchange ${exchangeName} and routing key is ${routingKey} AND SIGNATURE IS ${signature}`);
//     }
// }
// export default Producer