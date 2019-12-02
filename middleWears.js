import routes from "./routes"

export const localsMiddleweare = (req, res, next)=>{
    res.locals.siteName = "we tube";
    res.locals.routes = routes;
    next()
}