//glovel
export const join=(req, res)=>{res.render('join',{pageTitle:'join'})}
export const login=(req, res)=>{res.render('login',{pageTitle:'login'})}
export const logout=(req, res)=>{res.send('LOGOUT!')}
//user
export const users = (req, res)=>{res.send('USERS!')}
export const userDetail = (req, res)=>{res.send(`user id is : ${req.params.id}`)}
export const editProfile = (req, res)=>{res.render('editProfile',{pageTitle:'editProfile'})}
export const changePassword = (req, res)=>{res.send('CHANGE_PASSWORD!')}