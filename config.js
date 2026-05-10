/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DARK-SILENCE-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJhZkR0YUFFZmVWNHRrbkx1ZnN5aDBLbVhVb05VdHNFMHV6R1ZxUDNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFgxNWsvODR0SlJNbWpab1lZa0k0NnRWYklteEVEN3NHQWp5aEZtc3lVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRkh2QlBLSXViZWdReUdLcFRVbmx3MHdxTk5EOVltYWFIeVBhZFR4b0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Tkowbm1TTlhsUmFSUklSUHJ5R0RVU2llQ2d6YU82NUljbnVFMXM3SVFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DWmExdmlTTTVwOEkvcHA0ckRnbk1jSEZTZTNTYmxDRmdDTHJtc3ZmM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI3L3BsWVIrTWxsZmlxLzJ1WkhSRC9qWnRFU1RESXlNTTRDc01wQ2JaU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUg1azFtczFwUFVtRHJNckZPZmJIZzZaVFNPbkY4YzVGa3VxbzNhakgyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5EeTY1ZkhLdkFxa0ZZRlhmK0FKcmNySVJHdFNGMnlNZkRhRzVRaWpRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRZcFI2bFppdWxJMFdORE1tUHZQR09GWjlvV3ozdTRLUEpKTitQZHJ2dWs4eExXT21OVFdIVVdYY0pNRVJGWEswNWh3bzRKbmhyTkhKejc3NlZBMkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJ4L29LcXdvM25xTzRTblhEQzVvQVlBQWNlNjJLZUg4MU9VTUJsRVFIQ0dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA5NzAxMjIwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzdFOTdCOUE1NTkxOTdGMjJGMjVERkM2RDZDRDMzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc4NDE4MzU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwOTcwMTIyMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBQUREQjc4NTkwRDZCMUI3QkZGQ0JFOTlGMTdBQTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODQxODM1NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDk3MDEyMjAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDdBMzYyMDg2RjQ2REU5RjJGODI4OURDRTg0NDkyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Nzg0MTgzNTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA5NzAxMjIwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0QyQzJGRUU4MUNBNUNGRTJDOTVGRDRFNDAzRTRCRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc4NDE4MzU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwOTcwMTIyMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBNEIwQkIwNjZCMDY1NEVERTc5MTBGNDcyRjdENEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODQxODM2MH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTSUxFTlRYNCIsIm1lIjp7ImlkIjoiOTIzMDk3MDEyMjAyOjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzI1NTIwMzU2ODAzMDk6MkBsaWQiLCJuYW1lIjoiNzg2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM2VoT0VGRUs2Rmd0QUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGUm5NSENQcWJQclQrRXRIWEhYU285UXRvQ215UVdxSGVUeU1MaDNVQ3gwPSIsImFjY291bnRTaWduYXR1cmUiOiI4U3dFRUhoM2RHTDZiZHc4amJuUGlxUUdMMmgyeFB0Z3g1T2UxZEdKbVZ0Zmt0Q0w4cmR6UjlJQVM5dHFLNWlVb3U4MnBiUmJyWmp2bmRjYi9jS2hDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic3NIQVFpbVFGQ1RncUNZOU02bVVQRldmdFNHOVMwYXVlUlM3c0Z6anBhTWora3kzUGFjcmRKOHJQbksyYk9iTDB5RnBCYnhMRVdyenlGR1M0Vk9rRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwOTcwMTIyMDI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVVp6QndqNm16NjAvaExSMXgxMHFQVUxhQXBza0ZxaDNrOGpDNGQxQXNkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Nzg0MTgzNTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlJXIn0=",
    CAPTION: process.env.CAPTION || "POWERED BY SILENTLOVER432",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_DOWNLOADING: process.env.AUTO_DOWNLOADING || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/IMG-20250505-WA0055.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DARK-SILENCE-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923096287432",
    OWNER_NAME: process.env.OWNER_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺DARK-SILENCE-MD",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү ∂αяк-sιℓεηcε-м∂`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};

