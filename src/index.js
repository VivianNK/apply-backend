import '@babel/polyfill';
import express from "express";

import router from './handlers'
import './mongo';

const app = express();
app.use(express.json());
app.use('/', () => {return "hi"});

app.listen('3002', () => {console.warn('WE up!')});