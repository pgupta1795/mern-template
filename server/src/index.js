const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const router = require('./app/router.js');

dotenv.config();
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT || 50000, () =>
  console.log(
    `\u{1F525}\u{1F680} app listen on port ${process.env.PORT} \u{1F525}\u{1F680}`
  )
);
