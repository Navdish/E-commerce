const amqplib = require('amqplib');
const exchangeName = 'authExchange';

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
            await this.channel.assertExchange(exchangeName, 'fanout', {durable: false});
            const q = await this.channel.assertQueue('', {exclusive: true});
            // got to processor 
            this.channel.bindQueue(q.queue, exchangeName, ''); // routing key
            this.channel.consume(q.queue, msg => {
                if(msg.content) console.log(" the message is : ", msg.content.toString());
            })
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }

}
module.exports = Consumer;
