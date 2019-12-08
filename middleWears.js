import routes from "./routes"
import multer from "multer"


export const localsMiddleweare = (req, res, next)=>{
    res.locals.siteName = "we tube";
    res.locals.routes = routes;
    res.locals.user = {
        isAutehticated:true,
        id:1
    }
    next()
}

const multerVideo = multer({ dest: 'uploads/videos/' }) // multer가 저장할 파일의 이름을 정함

export const uplodeVideo = multerVideo.single('videoFile') //multer 가 하나의 파일을...