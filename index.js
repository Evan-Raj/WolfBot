const login = require('fca-unofficial');

const credentials = {
  email: 'YOUR_FACEBOOK_EMAIL',
  password: 'YOUR_FACEBOOK_PASSWORD',
};

login(credentials, (err, api) => {
  if(err) return console.error(err);

  console.log('Bot logged in successfully!');

  // কোনো মেসেজ আসলে তা দেখাবে
  api.listenMqtt((err, message) => {
    if(err) return console.error(err);

    console.log('New message from:', message.senderID);
    console.log('Message body:', message.body);

    // reply example
    if(message.body === 'hi'){
      api.sendMessage('Hello! I am your bot.', message.threadID);
    }
  });
});
