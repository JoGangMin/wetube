import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
//mongoose 를 사용하여 mongoDB에 연결시킨다.
mongoose.connect(process.env.MONGO_URL,{ 
    useFindAndModify: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

const hendelOpen = ()=>{
    console.log('✅ connected to db')
}

const hendelError = (error)=>{
    console.log(`❌ error DB Connection:${error}`)
}

db.once('open',hendelOpen) //db가 open이 되면 안네메세지를 출력
db.on('error',hendelError) // db에 에러가 나면 에러메시지를 출력