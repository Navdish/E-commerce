const amqplib = require('amqplib');
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
            this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(message)), properties);
            console.log("sent", message);
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }

}
module.exports = Producer;
