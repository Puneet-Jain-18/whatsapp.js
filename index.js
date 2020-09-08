const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage('917042430525@c.us', 'pong');
});

// message.form = 91<number>@c.us
//or <number>-<groupid>@g.us

client.on('message', message => {
    console.log("Message Recieved");
    console.log(message.from)
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

client.initialize();