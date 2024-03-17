import express from 'express';
import { fileURLToPath } from 'url'
import path from 'path';
//import cookieParser from 'cookie-parser';
//import bodyParser from 'body-parser';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app
  .use(express.static(path.join(__dirname, 'static')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
    console.log("Index page");
    res.render('pages/index', { message: "message" });
  })

  .listen(8000, () => console.log(`Listening on 8000`))
