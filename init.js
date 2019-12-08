import './db'
import app from './app' //app.js을 다읽음
import dotenv from 'dotenv';
dotenv.config();
import './models/Video'

const PORT = process.env.PORT

const hendelListening= () =>{
    console.log(`✅ listning : http://localhost:${PORT}`);
}

app.listen(PORT, hendelListening);
