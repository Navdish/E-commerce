const amqplib = require('amqplib');
const exchangeName = 'authExchange';

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
    async sentMsg({name, email, password}){
        try {
            if (!this.channel) {
                await this.createChannel()
            }
            await this.channel.assertExchange(exchangeName, 'fanout', {durable: false});
            const msg = {name, email, password};
            // got to processor 
            this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(msg)));
            console.log("sent", msg);
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }

}
module.exports = Producer;
