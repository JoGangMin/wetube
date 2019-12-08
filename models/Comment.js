import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({// 스키마 생성자를 이용하여 정의 한다
    text: {
        type:String,
        required:'test is requrired'
    },
    createdAt: {
        type: Date,
        default: Date.now
      } 
});

const model = mongoose.model('comment', CommentSchema);// mongoDB 컬렉션과 연결
export default model;
