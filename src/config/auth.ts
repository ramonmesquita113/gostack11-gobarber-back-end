// secret generated in md5.cz with string: gostack11-gobarber
export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
