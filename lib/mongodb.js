const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/Z1fR1tgh/7315.jpg' },
    { key: 'ALIVE_MSG', value: '🄳🄴🅅🄴🄻🄾🄿🄴🅁  🄸🄽🄵🄾🅁🄼🄰🅃🄸🄾🄽  🛸\n\n...ʜᴇʏ ᴄᴀꜱᴘᴇʀ ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ɪꜱ ᴄᴀꜱᴘᴇʀ ᴏꜰᴄ [ ᴛ ᴅ ᴅ ɢᴀɴɢ ] ...🚀 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴄᴀꜱᴘᴇʀ ᴏꜰꜰɪᴄɪᴀʟ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴᴇʟ🧬 https://whatsapp.com/channel/0029Vb3poRz6hENyW8us880d🔥...👋...ɪ ᴀᴍ ꜱᴛᴜᴅᴇɴᴛ ꜰʀᴏᴍ ꜱʀɪ ʟᴀɴᴋᴀ...🌟... ᴡʜᴏ ʟᴏᴠᴇꜱ ᴘʀᴏɢʀᴀᴍɪɴɢ.ʟᴏɢᴏ ꜱᴇꜱɪɴɢ.ᴠɪᴅᴇᴏ ᴇᴅɪᴛɪɴɢ.ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ᴀɴᴅ ʜᴀᴄᴋɪɴɢ...🔱... ᴍʏ ᴘʀᴏᴊᴇᴄᴛ ɪꜱ ʙᴏᴛ ᴅᴇᴠᴇʀʟᴏᴘɪɴɢ.ᴘʀᴏɢʀᴀᴍɪɴɢ.ʟᴏɢᴏ ꜱᴇꜱɪɴɢ.ᴠɪᴅᴇᴏ ᴇᴅɪᴛɪɴɢ.ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ᴀɴᴅ ʜᴀᴄᴋɪɴɢ...🔱...ᴛʜɪꜱ ɪꜱ ᴏꜰꜰɪᴄɪᴀʟ ᴡʜᴀᴛꜱᴀᴘᴘ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴍʏ ᴀʟʟ ᴘʀᴏᴊᴇᴄᴛꜱ...⚙️...ɪ ᴍᴀᴅᴇ ꜰᴏʀ ᴛʜɪꜱ ʙᴏᴛ ᴍʏ ᴀᴘɪ ᴀʀᴇ ᴀᴠᴀɪʟᴀʙʟᴇ ʜᴇʀᴇ...💭...\n\n𝓞𝓦𝓝𝓔𝓡  - *✾ ⏤ ͟͞ ͟͞ ❮❮❮⛩𝐂𝚫𝐒𝚸𝚵𝚪 𝚯𝐅𝐅𝚰𝐂𝚰𝚫𝐋˟˟˟⚚ ❯❯❯  ͟͞ ͟͞⏤*\n\n𝓣𝓔𝓐𝓜 -  *⏤ ͟͞ ❮❮ 𝐓𝐄𝐂𝐇𝐍𝐈𝐂𝐀𝐋 -  𝐃𝐀𝐑𝐊 - 𝐃𝐄𝐕𝐈𝐋𝐒 ❯❯  ͟͞⏤ ᵀᴹ ヤ🇱🇰*\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄᴀꜱᴘᴇʀ ᴏꜰᴄ [ᴛ.ᴅ.ᴅ ɢᴀɴɢ]*,
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
