//객체로 만들어도 됨
//globle
export const home =(req, res)=>{res.render('home',{pageTitle:'home'})}
export const search =(req, res)=>{res.send('SEARCH!')}
//video
export const videos = (req, res)=>{res.send('VIDEO!')}
export const upload = (req, res)=>{res.render('upload',{pageTitle:'uplode'})}
export const videoDetail = (req, res)=>{res.send(`video id : ${req.params.id}`)}
export const editVideo = (req, res)=>{res.render('editeVideo',{pageTitle:'editVideo'})}
export const deliteVideo = (req, res)=>{res.send(`DELITE_VIDEO! for video id ${req.params.id}`)}