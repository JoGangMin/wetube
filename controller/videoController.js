//객체로 만들어도 됨
import routes from '../routes'
import Video from '../models/Video'

//globle
export const home = async (req, res)=>{
        try{
            const videoDB = await Video.find({}).sort({'_id':-1}) // find video in mongodb
            res.render('home',{pageTitle:'home',videoDB})
        } 
        catch(error){
            console.log(error)
            res.render('home',{pageTitle:'home',videoDB:[]})
        }
}

export const search =async (req, res)=>{
    const {
        query:{term:searchingBy}
    }=req
    let videoDB=[]
    try{
        videoDB = await Video.find({//finde feom searchingBy
            title: { $regex: searchingBy, $options: "i" }
        });
    }
    catch(error){
        console.log(error)
    }
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

export const videoDetail = async (req, res)=>{
    const {params:{id}}=req
    const video = await Video.findById(id); // db에서 id 값으로 찾은 비디오
    try{
        console.log(video)
        res.render('videoDetail',{pageTitle:video.title,video})
    }
    catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}

export const getEditVideo = async (req, res)=>{
    const{params:{id}}=req
    try{
        const video =  await Video.findById(id)

        res.render('editVideo',{pageTitle:`edit ${video.title}`,video})
    }
    catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
    
}
export const postEditVideo = async (req, res)=>{
    const {body:{title,description},params:{id}}=req
    try{
        await Video.findOneAndUpdate({_id: id},{ title, description })
        res.redirect(routes.videoDetail(id))
    }
    catch(error){
        
    }
}

export const deliteVideo = async(req, res)=>{
    const {params:{id}}=req
    try {
       await  Video.findOneAndRemove({ _id:id });
    } 
    catch (error) {
        console.log(error)
    }
    res.redirect(routes.home)
}