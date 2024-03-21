const amqplib = require('amqplib');
const exchangeName = 'userExchange';
const { userProcessor } = require('../processor');

const mapper = {
    'user_registered': userProcessor.createUser
}

class Consumer {
    channel;
 
    async createChannel() {
        try {
            const connection = await amqp.connect('amqp://localhost');
            this.channel = await connection.createChannel();   
        } catch (error) {
            console.log("channel not created", error);
        }
    }
    async consumeMsg(){
        try {
            if (!this.channel) {
                await this.createChannel()
            }
            console.log("Starting the consumer ....")
            await this.channel.assertExchange(exchangeName, 'fanout', {durable: false});
            const q = await this.channel.assertQueue('', {exclusive: true});
            // got to processor 
            this.channel.bindQueue(q.queue, exchangeName, ''); // routing key
            this.channel.consume(q.queue, async(message) => {
                if(message.content) console.log(" the message is : ", message?.content?.toString());
                const signature = message?.properties?.type;
                if(signature){
                    try {
                        const data = JSON.parse(message?.content?.toString());
                        console.log("user details",data.message.user);
                        await mapper[signature](data.message.user);
                        channel.ack(message);
                    } catch (error) {
                        console.log(error.message);
                        channel.nack(message, false, false);
                    }
                }
            })
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }

}
module.exports = Consumer;
///////////////////////////////////////////////////////////////////

// import amqp from 'amqplib'
// import configRabbit from "../config/rabbitmq.config.js"
// import userProcessor, { authProcessor } from "../processor/index.js"
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