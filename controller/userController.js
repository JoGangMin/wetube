import routes from "../routes"

//glovel
export const getJoin=(req, res)=>{res.render('join',{pageTitle:'join'})}
export const postJoin=(req, res)=>{         // 회원가입 처리
    const {
        body:{name, email, password, password2}
    }=req

    if(password !== password2){
        console.log('error of password')
        res.status(400)
        res.redirect(routes.join)
    }
    else{
        res.redirect(routes.home)
    }
    
}

export const getLogin=(req, res)=>{res.render('login',{pageTitle:'login'})}
export const postLogin=(req, res)=>{res.redirect(routes.home)} // lofin 처리    

export const logout=(req, res)=>{
    //process logout
    
    res.redirect(routes.home)
}
//user
export const users = (req, res)=>{res.send('USERS!')}
export const userDetail = (req, res)=>{res.send(`user id is : ${req.params.id}`)}
export const editProfile = (req, res)=>{res.render('editProfile',{pageTitle:'editProfile'})}
export const changePassword = (req, res)=>{res.render('changePassword',{pageTitle:'changePassword'})}