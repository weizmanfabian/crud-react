import { upload } from '../middleware/ImgMiddleware.js';
import { singleFileUpload, deleteSingleFile } from '../controllers/ImgController.js';
import express from 'express';
const router = express.Router()

router.post('/uploadSingleFile', upload.single('img'), singleFileUpload)

router.post('/deleteSingleFile/:nameFile', deleteSingleFile)

export default router;