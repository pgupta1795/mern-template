const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on('open', () =>
  console.log(`\u{1F525}\u{1F680} Database Connected \u{1F525}\u{1F680}`)
);
db.on('error', (err) => console.log(err));

module.exports = db;
