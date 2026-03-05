const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

let _getConfig;
try {
    _getConfig = require("./lib/configdb").getConfig;
} catch(e) {
    _getConfig = () => null;
}

function cfg(key, defaultVal) {
    const val = _getConfig(key);
    
    if (val === null || val === undefined || val === '') return process.env[key] || defaultVal;
    return val;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "QADEER-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JRRitsdlVKd2lKcUREZ2VOditZSGNCVnUvdEE5SnZDMCt1K0VjTzcyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmptZi9mSXVJUmlLOG4zcEpISTVaMFYzR2FkRG5EbVFWMDVlMWhSNHZHaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QmsxTWRpWnBuaERRTTBFUWQvS3NGL2NzYjdjb1JGSDM0aEVoUnJCUjJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFL3JhbnBTeHhFQnhmcEhoQkpLeHlqU3czbmlCeHNxcjVDYy8vN1pmc2hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFWU4wYldabWp3aE5IVkNoNi9Bc0hvTTZhdWhOZUFZeFhud00yS0hrRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlaWVVrbUk0L2dnWXk5Wi9JS001UWQxdktwRHRreUlzYUs2T1ZhelZaeG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0N5V1BwSlhsVlZxSEFiTy9FMEFTU21SUnQ4azQzdjhwaEUzMkFZREdGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickZUZk5CWWViVUdWcWlKQXNRWUR1QW5mVkJyaXY1dk93b3NkcStuck0yOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImViazFZODlqMFlWQWdlaW9DZ0l5S3lWT3RFZUhDUlZVRzNkNCtZbldkc1A0SldXdlZWS2tMTkpPMVV1a3VNZmRjSktJU0pJMXRpb0Q2SVBPUThSaUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJDakFmTEpNRFdkdDY3VjhFK21RWjYxN3VLclVTL3BoZ0VBdkZhazdOUXhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlBLRjc5TldTIiwibWUiOnsiaWQiOiIyNTY3MDI0ODQxNjM6NTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDc0NDMyNjI5Njc5NTE6NTFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbk0zSmdORUlHNnBjMEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTT1ppQm92M0hlY3lWVVY5UlpJZjZaWVFGMFNXY3AvM211ZkJDeXEzZmw0PSIsImFjY291bnRTaWduYXR1cmUiOiJiYUVvYk5JbkVwMlVFQVhoUGtiVjI2SW12NGV0ckNuRDdkMWRQbkpucVBmcXB4ZUZSV2FsTnZuN1RnQnRhM2k2UllQdHV2QXhoNmkzeDNHL01GWVBBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoick12WWdWb0VLYTVHNEZHc2FBaFUreEpkUEJvM0QrMTQvYXk2cGpvT29xVWhhTjV0ZVhFQWVIYmYvTEU2Z3FaTnU4UmNrSzFlMEdjSGFHZ0dwL1dJQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDc0NDMyNjI5Njc5NTE6NTFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVqbVlnYUw5eDNuTWxWRmZVV1NIK21XRUJkRWxuS2Y5NXJud1FzcXQzNWUifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcyNzA3MDgyLCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9RRiJ9",
    PREFIX: cfg("PREFIX", "."),
    CHATBOT: cfg("CHATBOT", "on"),
    BOT_NAME: cfg("BOT_NAME", "QADEER-AI"),
    MODE: cfg("MODE", "public"),
    REPO: process.env.REPO || "https://github.com/qadeermd/QADEER-AI",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "256702484163",
    OWNER_NAME: cfg("OWNER_NAME", "QADEER-AI"),
    DEV: process.env.DEV || "923300005253",
    DEVELOPER_NUMBER: '923300005253@s.whatsapp.net',

    // ===== AUTO STATUS SETTINGS =====
    
    AUTO_STATUS_SEEN:  cfg("AUTO_STATUS_SEEN",  "true"),
    AUTO_STATUS_REACT: cfg("AUTO_STATUS_REACT", "true"),
    AUTO_STATUS_REPLY: cfg("AUTO_STATUS_REPLY", "false"),
    AUTO_STATUS_MSG:   cfg("AUTO_STATUS_MSG",   "*QADEER AI VIEWED YOUR STATUS 🤖*"),

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY:   cfg("AUTO_REPLY",   "false"),
    READ_MESSAGE: cfg("READ_MESSAGE", "false"),
    REJECT_MSG:   process.env.REJECT_MSG || "*📞 CALL NOT ALLOWED 📵*",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT:          cfg("AUTO_REACT",          "false"),
    OWNER_REACT:         cfg("OWNER_REACT",         "false"),
    CUSTOM_REACT:        cfg("CUSTOM_REACT",         "false"),
    CUSTOM_REACT_EMOJIS: cfg("CUSTOM_REACT_EMOJIS", "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍"),
    STICKER_NAME:        process.env.STICKER_NAME || "QADEER-AI",
    AUTO_STICKER:        cfg("AUTO_STICKER", "false"),

    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: cfg("AUTO_RECORDING", "false"),
    AUTO_TYPING:    cfg("AUTO_TYPING",    "false"),
    MENTION_REPLY:  cfg("MENTION_REPLY",  "false"),
    MENU_IMAGE_URL: cfg("MENU_IMAGE_URL", "https://files.catbox.moe/2ozgh8.jpg"),

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE:  process.env.ANTI_DELETE  || "true",
    ANTI_CALL:    cfg("ANTI_CALL",    "false"),
    ANTI_BAD_WORD:cfg("ANTI_BAD_WORD","false"),
    ANTI_LINK:    cfg("ANTI_LINK",    "false"),
    ANTI_VV:      process.env.ANTI_VV || "true",
    DELETE_LINKS: cfg("DELETE_LINKS", "false"),
    ANTI_DEL_PATH:process.env.ANTI_DEL_PATH || "same",
    ANTI_BOT:     cfg("ANTI_BOT",     "true"),
    PM_BLOCKER:   process.env.PM_BLOCKER || "true",

    // ===== FUCK UHHH COPY CODERSX=====
    DESCRIPTION:   process.env.DESCRIPTION || "*_© POWERED BY QADEER-AI*",
    PUBLIC_MODE:   process.env.PUBLIC_MODE  || "true",
    ALWAYS_ONLINE: cfg("ALWAYS_ONLINE", "false"),
    AUTO_BIO:      cfg("AUTO_BIO",      "false"),
    WELCOME:       cfg("WELCOME",       "false"),
    GOODBYE:       cfg("GOODBYE",       "false"),
    ADMIN_ACTION:  cfg("ADMIN_ACTION",  "false"),
};
