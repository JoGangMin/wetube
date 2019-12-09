import express from 'express';
import routes from '../routes';
import { videos, getUpload, videoDetail, getEditVideo, deliteVideo, search, postUpload, postEditVideo } from '../controller/videoController';
import { uplodeVideo } from '../middleWears';

const videoRouter = express.Router()

videoRouter.get(routes.videos, videos)
//uplode
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uplodeVideo, postUpload)
//detail
videoRouter.get(routes.videoDetail(), videoDetail)
//edit
videoRouter.get(routes.editVideo(), getEditVideo)
videoRouter.post(routes.editVideo(), postEditVideo)
//delete
videoRouter.get(routes.deleteVideo(), deliteVideo)
export default videoRouter;