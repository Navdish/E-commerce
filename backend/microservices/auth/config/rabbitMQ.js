const amqplib = require('amqplib');

(async ()=>  {
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        console.log("Rabbit MQ connection established");
        return channel;
    } catch (error) {
        console.log(error, "RabbitMQ connection failed");
    }
  })();