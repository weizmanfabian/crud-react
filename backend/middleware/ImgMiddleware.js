import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    // callBack(null, '../public/imgVentas')     // './public/images/' directory name where save the file
    // callBack(null, path.join(__dirname, '../public/imgVentas'))     // './public/images/' directory name where save the file
    callBack(null, path.join('./public'))     // './public/images/' directory name where save the file
  },

  filename: (req, file, callBack) => {
    let { camp, subCamp } = req.params;
    callBack(null, `${camp}-${subCamp}-${file.fieldname}-${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`);
  }
})

export const upload = multer({
  storage: storage
})

