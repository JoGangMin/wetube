//객체로 만들어도 됨
import routes from '../routes'
import Video from '../models/Video'

//globle
export const home = async (req, res)=>{
        try{
            const videoDB = await Video.find() // find video in mongodb
            console.log(videoDB)
            res.render('home',{pageTitle:'home',videoDB})
        } 
        catch(error){
            console.log(error)
            res.render('home',{pageTitle:'home',videoDB:[]})
        }
}

export const search =(req, res)=>{

    const {
        query:{term:searchingBy}
    }=req
    res.render('search',{searchingBy, pageTitle: 'search', videoDB})
}
//video
export const videos = (req, res)=>{res.send('VIDEO!')}

export const getUpload = (req, res)=>{res.render('upload',{pageTitle:'uplode'})}
export const postUpload = async(req, res)=>{
    const {body:{title, description},
        file:{path}
    }=req

    const newVideo = await Video.create({ //정의된 스키마에 정보를 입력하여 db를 만든다.
        fileUrl:path,
        title,
        description,
    })

    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res)=>{
    console.log(req.params)
    res.render('videoDetail',{pageTitle:'videoDetil',})
}

export const editVideo = (req, res)=>{res.render('editVideo',{pageTitle:'editVideo'})}

export const deliteVideo = (req, res)=>{res.send(`DELITE_VIDEO! for video id ${req.params.id}`)}