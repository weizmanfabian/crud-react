import express from 'express';
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js"
import imgRoutes from "./routes/imgRoutes.js"
import { port } from './config.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join('./public')))

app.use('/blogs', blogRoutes)
app.use('/upload', imgRoutes)

try {
  await db.authenticate()
  console.log('conexión exitosa');
} catch (err) {
  console.log(`error en la conexión ${err}`);
}



app.get('/', (req, res) => {
  res.send('Estás en el servidor')
})



app.listen(port, () => console.log(`server UP running in http://localhost:${port}`))