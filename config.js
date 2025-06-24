const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, "mUQHQZhR#CXzwIL1um8sRwH0rL1krUXc31RI-O6BTXCuP7w7gW9k",
MONGODB;proccess.env.MONGODB ||"Mongodb",
};

