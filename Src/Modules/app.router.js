import messageRouter from './Message/Message.router.js'
import authRouter from './Auth/Auth.router.js'
import connectDB from '../../DB/connection.js';
import userRouter from './User/User.router.js'
import cors from 'cors';
 const initApp=(app,express)=>{
    connectDB();
    app.use(express.json());
    app.use(cors());
    app.use('/messages',messageRouter)
    app.use('/Auth',authRouter)
    app.use('/user',userRouter)
    app.use('*',(req,res)=>{
        return res.json({message:"page not found"});
    })
}
export default initApp;