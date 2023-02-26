const { db } = require('./server/db');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server/app');
const PORT = process.env.PORT || 3000;
const seed = require('./script/seed');

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
