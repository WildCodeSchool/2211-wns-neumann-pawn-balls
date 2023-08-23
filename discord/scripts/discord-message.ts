import { Client, ClientOptions, GatewayIntentBits, TextChannel } from 'discord.js';
// import { load } from 'ts-dotenv';

// const env = load({
//   BOT_TOKEN: String,
//   TEST_CHANNEL_ID: String,
//   VOCAL_CHANNEL_ID: String,
// });

// const BOT_TOKEN = process.env.BOT_TOKEN;
// const CHANNEL_ID = process.env.TEST_CHANNEL_ID;
// const VOCAL_CHANNEL = process.env.VOCAL_CHANNEL_ID;
const BOT_TOKEN = 'MTE0MjkxMzU1MTIwNDM1NjI5Ng.G00i9Z.krRqrmZLr-HsS7cRVSOMqR-3zWub6KkQEGGWR8';
const TEST_CHANNEL_ID = '1142913191656046722';
const VOCAL_CHANNEL = '1061917109162102814';

const clientOptions: ClientOptions = {
  intents: [GatewayIntentBits.Guilds],
};

const message = process.argv[2];

const discordClient = new Client(clientOptions);

discordClient.on('ready', () => {
  console.log({ VOCAL_CHANNEL });
  const channel = discordClient.channels.cache.get(VOCAL_CHANNEL ?? '') as TextChannel;
  channel?.send(message);
  discordClient.destroy();
});

discordClient.login(BOT_TOKEN);
