import express from 'express';
import routes from '../routes';
import { videos, getUpload, videoDetail, editVideo, deliteVideo, search, postUpload } from '../controller/videoController';
import { uplodeVideo } from '../middleWears';

const videoRouter = express.Router()

videoRouter.get(routes.videos, videos)

videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uplodeVideo, postUpload)

videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deliteVideo)
export default videoRouter;