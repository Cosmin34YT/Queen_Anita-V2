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
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdEM3I4cVdhOFpzRUlwd1B2ZlJjY1ZmOWhWSmM0Z2FXVzVPbUljSC9VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUJmTllYckRtdVpEcWJEcERqbEhrUGNPNExJM2RsNDJUMzl1YmxJa0RYTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1AzOUJRYkNRNHFRQVZIRWZPOHI3V3RNR05ZSVBLWFJHKzd3RUw4cm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQmZRNmdBUU0wMi81am9YYkI2QTRuVFNaZnd6ZzV6MCtCdlJkRm9hV2swPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKekJJRmhOVVZCWWpBSlRSKzVRQ1RDcy9RYTdQaVlTMm1iQ3Q4azBzbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOMHBPSXJkMUJDSzNmVUVkS1NSZVBJN2hremljeUJQRU1iMDdNTEFNM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tCVzVSbFFtaFFwaUlMYzBKajk5RlFRTmx6STRzOGRyby9qSy9RdGhITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkF6d3Y1aEZSTEkyWHdBRlhMTVN0TjFrVUpQNFRUZmZ0K1FSeGJpWFdHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9zQXVhZjR1K0tUM3B1bGprb0Q2TTA5V3dLbzBiMTZVVnhOUFpWUXRMUEl0ZW5WRDZNQ0pLbVhhL0d1cjc3V3VSSCttYVl2a3ZDQTdybFVCTFdrdmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IkV5VElrMGdEdkN6U0k3enlZdURlckdDWDQwZ0tNbTRpL1FxcmFhRzNpMzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0U1NzgzNDJBMTA3RjMzMTU3RUVBRTNCMkNENzg0RTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzAyNjk5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicDQ5SGZMVFlRR0dUbnJ4X3V1NVRMZyIsInBob25lSWQiOiI2YTBkYjhkMS04YTA1LTQ1ZmItYTBhZC05OWI2MGNkZjUyNmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFWRm92WWhhdFJvcDJyWC8xV2sxWVpYYkFJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF3V2NUbnpUa3RoMytWTWpLSk5VL1hMUEI5MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKUlhHMUtZSyIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6OTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiW1NuaXBlcl0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xpd2pkZ0NFS09jemJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZmUys4dEVlMnNmcUFFdVlXUkNSa0t4Ky9PeHJTWjQyZjVuYThFdkhEMEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitacC9iT3RtMDR4NTBOVWRudHdBUm81NFZxbm5RL1ZzdkhiT2p5RmlyNUZscEkzZlpERmgxOHQ4WDBFckZYcWxMRjdlbEk4NFM2Mm5ndW41S2ErYkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUTmZTNEt1TlBPRmcwVjROcXVTOU5SaHpBVUtIZjFpaGNNWlpLc1hIM3FmdG9HTDVuWmp4YXFDWG4vOGI4Mm1NdURrajB5dlQra084d0pHbFhkYVVqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzcwODExOTI5OjkzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJYMHZ2TFJIdHJINmdCTG1Ga1FrWkNzZnZ6c2EwbWVObitaMnZCTHh3OUEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMjY5OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1hmIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "0770811929",
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
