//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEduaUZEaTRWU3piZnhJODJreFRMYlpzTkFMVTJyZXQ5MDNSWnZqTlBYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXdSNFd5Zm1reTBCZmluWHZrelp2Y3YxQ1hEVHFDUzFUVGJUc2wrQTZ4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QytmM1BFSzFCcXNhdUtIRUdFekpDc0t6UWF4bFdZWnUwRmEyREg4Y1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSnQzTGFsQ0ZabzlTcGpicDVEUVdMMitBWlRrL25UU1RzRm13azJvenlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNUThLV2c1dWlVWmxHaGZsTGNGaWlxdENnQmhrZkF1QnBvNmxrb2x4VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJKzIvYUZDVEU2VkZUMS9BMitVNWdrblNzb1pucTdkTkJNTGxOSmE1bWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01mRVEyUG5ha2s3T1JDVVN0S1M3ajVhay9iVjl6MWp3aVR3MDBITkdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHJhVTNtYktFSUhYMVhwcFQ3M1hiVTcwR0xuUHA2eUNJb1RNUjNMNVYyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx3Vng2M1VMbnJDL1RUOS9lS2IrdFh5Z2JTSElHZG5zV01TME5SWnNHRU5EbVpYRjZ2UDlBdzBUVTgxV1NCM3I2WS8xdDkyejRGUVRkK3FEdmgwSmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoidTNYVFBrMEtPNm15RGlORUZMMFZwYUg4WFZVTk9lTDZnL3pyTHptdzdxMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSnlBQ2hQN3dSbnVVWnVoVEktcjc3dyIsInBob25lSWQiOiJlNDQ5YWRmYi03MTg5LTRlZTktOWQyZC00YzRiOGQ3MjNjNzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUY2QnBqVU5ZT0JnVUV4VW9UOXNuaFd3Q2ZzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMHB1NzY4eWFpNTJEcXovcFcvdjY4WFBEc1E9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPT3hyTUlCRUkrdXViVUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGTVU1MG1ZZCtWelVobGQzYno0Y1hvTWlHOG5oQ29Ickw5MzFDT0V1YkQ4PSIsImFjY291bnRTaWduYXR1cmUiOiIrZzIwWDF6TUZZZjJUaEM5NUIrUDJWY0xZaGNTOTVCVFRUNHpSWnVEcGJjdEJONWZuTTc5dlBUNk5xWkJVRmFQN3c5QmZUMkFCQ2VhU1BUeUlzdUFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRldwQlo4M0haQTZEcjlRc2pZeUx2NjF6aDRUbndPZHJQcytmYnRRMy9JRWl5Yzh4OHM0aEo3MENEYi9CeWs4NElWd0N5eDRELytPSkRzUWpoRUVqZ2c9PSJ9LCJtZSI6eyJpZCI6IjQwNzcwODExOTI5OjY3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ItKTzLbhtIfMtuG0gMy2yoDMtsqfzLbhtIfMtnPMtnPMtiIsImxpZCI6IjQxNDUxMDQ4MTkwMDgxOjY3QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc3MDgxMTkyOTo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVEZPZEptSGZsYzFJWlhkMjgrSEY2RElodko0UXFCNnkvZDlRamhMbXcvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3MDE1OTYsImxhc3RQcm9wSGFzaCI6IjE3TlVYSiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQS8vIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "ANONIM-V2",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
