import express from 'express';
const app=express();
import * as messageController from './Controller/Message.controller.js'
import { asyncHandler } from '../../Middleware/errorHandling.js';
import { auth } from '../../Middleware/Auth.Middleware.js';


app.post('/:reciverId',asyncHandler(messageController.sendMessage));
app.get('/',auth,asyncHandler(messageController.getMessages));
export default app;