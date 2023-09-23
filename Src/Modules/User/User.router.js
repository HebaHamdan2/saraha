import express from 'express';
const app=express();
import * as userController from './Controller/User.controller.js';
import {auth} from '../../Middleware/Auth.Middleware.js'
import { asyncHandler } from '../../Middleware/errorHandling.js';
app.get('/',auth,asyncHandler(userController.profile));
export default app;