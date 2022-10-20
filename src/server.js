/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRender';
import regRender from './routes/regRender';
import apiAuth from './routes/api/apiAuth';
import authRender from './routes/authRender';
import profileRender from './routes/profileRender';

require('dotenv').config();

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'some bullshit',
  resave: false,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/reg', regRender);
app.use('/auth', authRender);
app.use('/api', apiAuth);
app.use('/profile', profileRender);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
