import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const instance = axios.create({
  baseURL: 'https://api.line.me',
  timeout: 9000,
  headers: {
    Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
  },
});

/**
 * @param {string} obj.replyToken
 * @param {Array<Object>} obj.messages
 * @param {string} obj.messages[].type
 * @param {string} obj.messages[].text
 */
const reply = ({
  replyToken,
  messages,
}) => instance.post('/v2/bot/message/reply', {
  replyToken,
  messages,
});

export {
  reply,
};

export default null;
