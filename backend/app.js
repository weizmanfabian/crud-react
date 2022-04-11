import express from 'express';
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes)

try {
  await db.authenticate()
  console.log('conexión exitosa');
} catch (err) {
  console.log(`error en la conexión ${err}`);
}

app.get('/', (req, res) => {
  res.send('Estás en el servidor')
})

app.listen(8000, () => console.log(`server UP running in http://localhost:8000`))