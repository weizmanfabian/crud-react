import path from 'path';
import fs from 'fs';


export const singleFileUpload = (req, res) => {
  if (!req.file) {
    console.log("NO hay imagen para cargar");
    res.json({ err: 'Debe Seleccionar una imagen' })
  } else {
    console.log(req.file.filename)
    // var imgsrc = 'http://localhost:8000/img/' + req.file.filename
    let url = req.file.filename
    res.json({ msg: 'Image Upload', url: url })
  }
}

export const deleteSingleFile = (req, res) => {
  let { nameFile } = req.params
  var filePath = path.join('./public') + nameFile;
  console.log(filePath)
  console.log('img delete')
  fs.unlinkSync(filePath);
  res.json({ msg: 'Image delete' })
}

