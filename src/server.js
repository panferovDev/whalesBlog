import express from 'express';
import { userCheck } from './middleWares';
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';

require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(session({
  name: 'sId',
  store: new FileStore({}),
  secret: 'fjdsfhsue',
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/posts', postRouter);
app.use(userCheck);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('Server start on ', PORT);
});
