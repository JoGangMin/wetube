//객체로 만들어도 됨
import { videoDB } from '../db'
import routes from '../routes'
//globle
export const home =(req, res)=>{res.render('home',{pageTitle:'home',videoDB})}

export const search =(req, res)=>{

    const {
        query:{term:searchingBy}
    }=req
    res.render('search',{searchingBy, pageTitle: 'search', videoDB})
}
//video
export const videos = (req, res)=>{res.send('VIDEO!')}

export const getUpload = (req, res)=>{res.render('upload',{pageTitle:'uplode'})}
export const postUpload = (req, res)=>{
    const {
        body:{file, title, description}
    }=req
    //TO DO uplod and save video
    res.redirect(routes.videoDetail(324393))
}

export const videoDetail = (req, res)=>{
    console.log(req.params.id)
    res.render('videoDetail',{pageTitle:'videoDetil',})
}

export const editVideo = (req, res)=>{res.render('editVideo',{pageTitle:'editVideo'})}

export const deliteVideo = (req, res)=>{res.send(`DELITE_VIDEO! for video id ${req.params.id}`)}