const amqp = require('amqplib');
const exchangeName = 'userExchange';
const { authProcessor } = require('../processor');

const mapper = {
    'user_added': authProcessor.createUser,
    'user_updated': authProcessor.updateUser,
    'user_status_updated': authProcessor.updateUserStatus,
    'user_deleted': authProcessor.deleteUser 
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
            await this.channel.assertExchange(exchangeName, 'fanout');
            const q = await this.channel.assertQueue('authQueue',  {durable: true});
            // got to processor 
            this.channel.bindQueue(q.queue, exchangeName, ''); // routing key
            console.log("queue name is ",q.queue);
            this.channel.consume(q.queue, async(message) => {
                console.log("queue name is ", q.queue);
                if(message.content) console.log(" the message is................: ", message?.content?.toString());
                const signature = message?.properties?.type;
                console.log("consumer signature is ", signature);
                if(signature && mapper[signature]){
                    try {
                        const data = JSON.parse(message?.content?.toString());
                        console.log("user details",data.user);
                        const res = await mapper[signature](data.user);
                        this.channel.ack(message);
                        console.log("console after emitting the message")
                    } catch (error) {
                        console.log("authh",error.message);
                        this.channel.nack(message, false, false);
                    }
                }
                else {
                    console.log("Ignore");
                    // this.channel.nack(message, false, false);
                }
            }, {noAck: false});
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