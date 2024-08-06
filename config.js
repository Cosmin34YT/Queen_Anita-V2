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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZpOVE0SmplTWhQbVdITmFjUDhtUmN3WllWRTBJR0FCSnE5SXBVa3ZGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTVhRVN3WFFmNXVQeEhVdkZLaEVHWHp6UUpBRHR1dlp2ZnREREFnN1RGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSnFiVEtZcFhxVGpTYU1WMXRKVForc2N0L09HSEFSZmlYNGpsQk1DOUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZ3BkV1daZUVteGZEb3dqUG1EZVdraGNyeDlRNWpTZ3czbW9mUWZnOHd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOekRyY2hCZE1TLzRYUHF3eHFiU1NvRUJIdmMwVG9YN2xsb0ZWWlFKMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZqMUJzaW5mdHlYYjM4aXpNN2FtUWVFTC9WL29ZVDVtN09KU28vWE9EaEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VaRndiMlFNM0VFS21rZnV2M2N0ZjVOUTJHS0piL3hYNExBbGhFQmJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzNsdUd2MHZ3N3lRQ3I1QVEwRGs0Q2kzNUlpN2hoMDh6MHVlVzFZODczRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBUWFBQN1FBM1VRVDlHcHV5SHUwTG5NRjdGd1RQTTBIVU5zUS8zZHhSY3RzVUdMVnlnVS9IVEc1bmNKN1Rvbm15cmtwRnVYSEVwTlgyWWhJNlVSQWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJYRFRmdFpyd3JGb1F0azJiVkIrRHpEYjIrRGpmcG1CbW5aUGR0TmZUcFFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQzMEZGN0Q3OTYxMzk1QUY2MTlCNjM5Q0MyQzUxNjlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MTg3MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyMjBGNDdDOEQ0OTgyMEVDQ0MxNzMxMUY4NjRDRDREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MTg3MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdERTU2RkFCN0MzNDU4Mjk5MkRFMDhBQzIxNDZBNzk5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MTg3MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBDQjg2RjA3QkYzQTI5OTVBOEYyNjUwNDVDRDQ3OTA5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MTg3MzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjgxRUo3MDBvUlMyQldEcjgyTWZlWVEiLCJwaG9uZUlkIjoiYmMxNmJhODYtM2ViYi00ZmM4LTllMGYtNDc4ZDcyNmY1MTNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU2YVBjcFpMNk1vN2hzZWVhN2tYdDNzczVJTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6MHdibDFjN3FDNFVTUVBwaU0zQUFDclNrTE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1ZMVzQyNk4iLCJtZSI6eyJpZCI6IjQwNzcwODExOTI5OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNvc21pbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGV3amRnQ0VNRE94clVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmZTKzh0RWUyc2ZxQUV1WVdSQ1JrS3grL094clNaNDJmNW5hOEV2SEQwQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMXdGaVA2NDRhcDFvU3RuTGo2aEh2SW9UOFhxL2VWR3BlRkJNNFdVYTNpYUJnNnlydm90ZGtGOU8zTHRJRlI0Wk81c1JqNDJIZWlCdnF1bEdiSnQzQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlRQeUtjSDBOMm10MDE0aHg0UDNLK29uQStQN2NLdjNKL25QOGFxVnM4cWxYVjRhWjhPZm45UDVXM3NRdlhjYXJ3aE9jdE5Hb1NIUDY2TmpJUDFXdWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDA3NzA4MTE5Mjk6OTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlgwdnZMUkh0ckg2Z0JMbUZrUWtaQ3NmdnpzYTBtZU5uK1oydkJMeHc5QSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjkxODczNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWGYifQ=="
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
