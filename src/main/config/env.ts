import 'dotenv/config';

const env = process.env;

const PORT: number = (Number(env.PORT) || 8080);

export default {
  PORT,
};
